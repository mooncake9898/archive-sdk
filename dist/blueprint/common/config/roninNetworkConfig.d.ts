import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class RoninNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
