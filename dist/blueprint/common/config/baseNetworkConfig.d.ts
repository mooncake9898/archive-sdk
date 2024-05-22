import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class BaseNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
