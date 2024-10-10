import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class MumbaiNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
