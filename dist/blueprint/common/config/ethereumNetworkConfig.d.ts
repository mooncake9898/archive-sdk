import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class EthereumNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
