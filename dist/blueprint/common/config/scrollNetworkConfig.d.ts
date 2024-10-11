import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class ScrollNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}