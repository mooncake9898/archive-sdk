import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class BscNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
