import { BlueprintContext } from '../../models/blueprintContext';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { EvmGasOracle } from '../gas/evmGasOracle';
import { GasOracle } from '../gas/gasOracle';
import { EvmTokenMetadataOracle } from '../token/evmTokenMetadataOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';

export abstract class BaseEvmNetworkConfig implements NetworkConfig {
  protected gasOracle: GasOracle;
  protected tokenMetadataOracle: TokenMetadataOracle;
  private blockTimeOracle: BlockTimeOracle;

  abstract getInitStartBlock(): number;

  // abstract getMainProviderUrl(): string;

  abstract getNetwork(): number;

  abstract getNetworkName(): string;

  abstract isContractNameLookupEnabled(): boolean;

  getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle {
    if (!this.tokenMetadataOracle) {
      this.tokenMetadataOracle = new EvmTokenMetadataOracle(context);
    }
    return this.tokenMetadataOracle;
  }

  getGasOracle(context: BlueprintContext): GasOracle {
    if (!this.gasOracle) {
      this.gasOracle = new EvmGasOracle(context);
    }
    return this.gasOracle;
  }

  // TODO: activate
  // getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle {
  //   if (!this.blockTimeOracle) {
  //     this.blockTimeOracle = new EvmBlockTimeOracle(context);
  //   }
  //   return this.blockTimeOracle;
  // }
}
