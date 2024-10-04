import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class ZkSyncNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
