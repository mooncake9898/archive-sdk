import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class BerachainNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
