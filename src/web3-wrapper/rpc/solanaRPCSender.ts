import { KafkaManager } from '../../logging';
import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';
import { ArchiveLogger, REQUEST_ID } from '../logger';
import { AbstractRPCSender } from './abstractRPCSender';
import { RPCOracle } from './rpcOracle';
import { Connection } from '@solana/web3.js';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { Logger } from 'log4js';
import { performance } from 'perf_hooks';

// By default, the RequestInit type in TypeScript does not include the agent property because it's not part of the standard Fetch API specification.
interface ExtendedRequestInit extends RequestInit {
  agent?: HttpsProxyAgent<string>;
}

export class SolanaRPCSender extends AbstractRPCSender {
  private rpcOracle: RPCOracle;
  private maxAttempts: number;
  private logger: Logger;

  constructor(
    rpcInfos: RpcInfo[],
    private networkId: number | string,
    private rpcProviderFn: (conn: Connection) => Promise<any>,
    private proxyServerUrl: string,
    private requestId?: string,
    private attemptFallback = true,
  ) {
    super();
    this.rpcOracle = new RPCOracle(networkId, rpcInfos);

    this.maxAttempts = this.attemptFallback ? this.rpcOracle.getRpcCount() : 1;

    this.logger = ArchiveLogger.getLogger();
    if (this.requestId) this.logger.addContext(REQUEST_ID, this.requestId);
  }

  public async executeCallOrSend(): Promise<any> {
    for (let attempt = 0; attempt < this.maxAttempts; attempt++) {
      const selectedRpc = this.rpcOracle.getNextAvailableRpc();
      if (!selectedRpc) {
        continue;
      }
      try {
        const start = performance.now();
        const connection = selectedRpc.requiresProxy
          ? this.getProxyConnection(selectedRpc.url)
          : new Connection(selectedRpc.url);
        const result = await this.rpcProviderFn(connection);
        const end = performance.now();
        const kafkaManager = KafkaManager.getInstance();
        kafkaManager?.sendRpcResponseTimeToKafka(selectedRpc.url, end - start, this.requestId);
        return result;
      } catch (error) {
        const errorMessage = this.getErrorMessage(error, selectedRpc.url);
        this.logger.error(errorMessage);
      }
    }

    const errorMessage = `All RPCs failed for networkId: ${
      this.networkId
    }, function called: ${this.rpcProviderFn.toString()}`;
    this.logger.error(errorMessage);
    return null;
  }

  private getProxyConnection(rpcUrl: string) {
    const agent = new HttpsProxyAgent(this.proxyServerUrl);

    return new Connection(rpcUrl, {
      commitment: 'confirmed',
      fetch: async (input, options) => {
        // docs: https://solana.stackexchange.com/questions/445/how-to-get-solana-web3-js-to-access-the-rpc-endpoints-through-a-proxy
        const processedInput = typeof input === 'string' && input.slice(0, 2) === '//' ? 'https:' + input : input;

        const result = await fetch(processedInput, {
          ...options,
          agent,
        } as ExtendedRequestInit);

        return result;
      },
    });
  }
}
