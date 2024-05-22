import { BlueprintContext } from '../../models/blueprintContext';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';

export interface NetworkConfig {
  getNetwork(): number;

  getNetworkName(): string;

  getInitStartBlock(): number;

  // gets the user lp transactions subgraph urls
  isContractNameLookupEnabled(): boolean;

  // getMainProviderUrl(): string;

  getGasOracle(context: BlueprintContext): GasOracle;

  getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;

  // TODO: activate
  // getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;
}
