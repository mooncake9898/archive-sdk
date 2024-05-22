import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class HarmonyNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
