import { CHAINID } from '../../constants';
import { RpcInfo } from '../../web3-wrapper/rpc/rpcInfo';

export class RPCOracle {
  private rpcInfos: RpcInfo[];

  constructor(
    private networkId: number | string,
    rpcInfos: RpcInfo[],
  ) {
    // check if networkId passed as parameter exists in CHAINID Enum
    if (!Object.entries(CHAINID).some((e) => e[1] === String(networkId))) {
      throw new Error(`Chain with ID ${networkId} not found.`);
    }
    this.rpcInfos = rpcInfos;
  }

  getRpcCount(): number {
    return this.rpcInfos?.length || 0;
  }

  getNextAvailableRpc(): RpcInfo {
    return RPCOracle.randomSelectRpc(this.rpcInfos);
  }

  static randomSelectRpc(rpcInfos: RpcInfo[]): RpcInfo {
    const totalWeight = rpcInfos.reduce((accumulator, rpc) => accumulator + rpc.weight, 0);

    const randomWeight = Math.random() * totalWeight;
    let weightSum = 0;

    for (const rpc of rpcInfos) {
      weightSum += rpc.weight;
      if (randomWeight < weightSum) {
        return rpc;
      }
    }
  }
}
