import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class OptimismNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
