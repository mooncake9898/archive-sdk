import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class AuroraNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
