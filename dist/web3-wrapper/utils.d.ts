import { RpcInfo } from '../web3-wrapper/rpc/rpcInfo';
import * as web3_solana from '@solana/web3.js';
export declare function executeCallOrSendSolana(rpcInfos: RpcInfo[], networkId: number | string, rpcProviderFn: (conn: web3_solana.Connection) => Promise<any>, requestId?: string, attemptFallback?: boolean): Promise<any>;
