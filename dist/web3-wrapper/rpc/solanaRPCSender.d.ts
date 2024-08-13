import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';
import { AbstractRPCSender } from './abstractRPCSender';
import { Connection } from '@solana/web3.js';
export declare class SolanaRPCSender extends AbstractRPCSender {
    private networkId;
    private rpcProviderFn;
    private proxyServerUrl;
    private requestId?;
    private attemptFallback;
    private rpcOracle;
    private maxAttempts;
    private logger;
    constructor(rpcInfos: RpcInfo[], networkId: number | string, rpcProviderFn: (conn: Connection) => Promise<any>, proxyServerUrl: string, requestId?: string, attemptFallback?: boolean);
    executeCallOrSend(): Promise<any>;
    private getProxyConnection;
}
