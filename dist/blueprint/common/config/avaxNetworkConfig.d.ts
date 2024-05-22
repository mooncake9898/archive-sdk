import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class AvaxNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
