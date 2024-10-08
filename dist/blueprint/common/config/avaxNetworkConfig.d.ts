import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class AvaxNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
