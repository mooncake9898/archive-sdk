import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare abstract class EthereumNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
}
