import { RpcInfo } from '../web3-wrapper/rpc/rpcInfo';
import { SolanaRPCSender } from './rpc/solanaRPCSender';
import * as web3_solana from '@solana/web3.js';

export async function executeCallOrSendSolana(
  rpcInfos: RpcInfo[],
  networkId: number | string,
  rpcProviderFn: (conn: web3_solana.Connection) => Promise<any>,
  requestId?: string,
  attemptFallback = true,
): Promise<any> {
  const sender = new SolanaRPCSender(rpcInfos, networkId, rpcProviderFn, requestId, attemptFallback);
  return sender.executeWithFallbacks();
}
// TODO: https://solana.stackexchange.com/questions/445/how-to-get-solana-web3-js-to-access-the-rpc-endpoints-through-a-proxy