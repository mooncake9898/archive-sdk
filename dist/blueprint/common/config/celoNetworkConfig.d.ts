import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class CeloNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
