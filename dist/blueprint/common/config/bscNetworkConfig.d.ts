import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class BscNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
