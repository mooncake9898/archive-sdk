import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class XdaiNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
