import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class XdaiNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
