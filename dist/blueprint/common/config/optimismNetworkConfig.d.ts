import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class OptimismNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
