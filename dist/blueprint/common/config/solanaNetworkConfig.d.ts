import { BlueprintContext } from '../../../blueprint/models';
import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';

export declare abstract class SolanaNetworkConfig implements NetworkConfig {
  protected tokenMetadataOracle: TokenMetadataOracle;
  protected gasOracle: GasOracle;
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
  getBlockTimeOracle(_context: BlueprintContext): BlockTimeOracle;
  getGasOracle(context: BlueprintContext): GasOracle;
  abstract getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
  abstract getMainProviderUrl(): Promise<string>;
}
