import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';
import { ArchiveJsonRpcProvider } from '../networkConfigurations';
import { AbstractRPCSender } from './abstractRPCSender';

export declare class EvmRPCSender extends AbstractRPCSender {
  private networkId;
  private networkName;
  private proxyServerUrl;
  private requestId;
  private sessionId?;
  private logger;
  private timeoutMilliseconds;
  constructor(
    networkId: number | string,
    networkName: string,
    proxyServerUrl: string,
    requestId: string,
    sessionId?: string,
  );
  executeCallOrSend(
    rpcInfos: RpcInfo[],
    rpcProviderFn?: (provider: ArchiveJsonRpcProvider) => Promise<any>,
    attemptFallback?: boolean,
    logRpcFailure?: boolean,
    throwException?: boolean,
  ): Promise<any>;
  private isOptimismOrBaseNetwork;
  getProviderForCall(selectedRpc: RpcInfo): ArchiveJsonRpcProvider;
  private getProxyRPCProvider;
}
