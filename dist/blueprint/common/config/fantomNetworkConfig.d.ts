import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class FantomNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
