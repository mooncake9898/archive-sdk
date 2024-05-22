import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class MaticNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
