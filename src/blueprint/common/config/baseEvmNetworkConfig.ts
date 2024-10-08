import { BlueprintContext } from '../../../blueprint/models';
import { RPCOracle, RpcInfo } from '../../../web3-wrapper';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { EvmGasOracle } from '../gas/evmGasOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';

export abstract class BaseEvmNetworkConfig implements NetworkConfig {
  protected gasOracle: GasOracle;
  protected tokenMetadataOracle: TokenMetadataOracle;

  abstract getInitStartBlock(): number;

  abstract getMainProviderUrl(): Promise<string>;

  abstract getNetwork(): number;

  abstract getNetworkName(): string;

  abstract isContractNameLookupEnabled(): boolean;

  abstract getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;

  abstract getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;

  getGasOracle(context: BlueprintContext): GasOracle {
    if (!this.gasOracle) {
      this.gasOracle = new EvmGasOracle(context);
    }
    return this.gasOracle;
  }

  selectRpcUrl(rpcInfos: RpcInfo[]): string {
    if (!rpcInfos || rpcInfos.length) return null;

    return RPCOracle.randomSelectRpc(rpcInfos)?.url;
  }
}
