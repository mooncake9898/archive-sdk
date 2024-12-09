import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class BaseNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
