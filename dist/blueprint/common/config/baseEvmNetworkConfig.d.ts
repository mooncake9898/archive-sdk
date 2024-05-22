import { BlueprintContext } from '../../models/blueprintContext';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';
export declare abstract class BaseEvmNetworkConfig implements NetworkConfig {
    protected gasOracle: GasOracle;
    protected tokenMetadataOracle: TokenMetadataOracle;
    private blockTimeOracle;
    abstract getInitStartBlock(): number;
    abstract getNetwork(): number;
    abstract getNetworkName(): string;
    abstract isContractNameLookupEnabled(): boolean;
    getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
    getGasOracle(context: BlueprintContext): GasOracle;
}
