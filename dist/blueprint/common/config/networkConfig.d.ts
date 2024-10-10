import { BlueprintContext } from '../../../blueprint/models';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';

export interface NetworkConfig {
  getNetwork(): number;
  getNetworkName(): string;
  getInitStartBlock(): number;
  isContractNameLookupEnabled(): boolean;
  getMainProviderUrl(): Promise<string>;
  getGasOracle(context: BlueprintContext): GasOracle;
  getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
  getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;
}
