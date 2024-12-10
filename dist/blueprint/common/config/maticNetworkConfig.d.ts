import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class MaticNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
