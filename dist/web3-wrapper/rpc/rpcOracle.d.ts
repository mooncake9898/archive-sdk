import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';
export declare class RPCOracle {
    private networkId;
    private rpcInfos;
    constructor(networkId: number | string, rpcInfos: RpcInfo[]);
    getRpcCount(): number;
    getNextAvailableRpc(): RpcInfo;
    static randomSelectRpc(rpcInfos: RpcInfo[]): RpcInfo;
}
