import { BlockTimeOracle } from '../blocktime/blockTimeOracle';
import { GasOracle } from '../gas/gasOracle';
import { TokenMetadataOracle } from '../token/tokenMetadataOracle';
import { NetworkConfig } from './networkConfig';
import { BlueprintContext } from '../../models';
export declare class SolanaNetworkConfig implements NetworkConfig {
    protected gasOracle: GasOracle;
    protected tokenMetadataOracle: TokenMetadataOracle;
    private blockTimeOracle;
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
    getGasOracle(context: BlueprintContext): GasOracle;
    getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;
    getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;
}
