import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';
import { AbstractRPCSender } from './abstractRPCSender';
import { Connection } from '@solana/web3.js';

export declare class SolanaRPCSender extends AbstractRPCSender {
  private networkId;
  private proxyServerUrl;
  private requestId?;
  private logger;
  constructor(networkId: number | string, proxyServerUrl: string, requestId?: string);
  executeCallOrSend(
    rpcInfos: RpcInfo[],
    rpcProviderFn: (conn: Connection) => Promise<any>,
    attemptFallback?: boolean,
  ): Promise<any>;
  private getProxyConnection;
}
