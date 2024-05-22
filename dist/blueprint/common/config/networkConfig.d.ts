import { BlueprintContext } from '../../models/blueprintContext';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
export interface NetworkConfig {
    getNetwork(): number;
    getNetworkName(): string;
    getInitStartBlock(): number;
    isContractNameLookupEnabled(): boolean;
    getGasOracle(context: BlueprintContext): GasOracle;
    getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
}
