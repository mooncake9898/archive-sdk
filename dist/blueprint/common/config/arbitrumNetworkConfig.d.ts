import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class ArbitrumNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
