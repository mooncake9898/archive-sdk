import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class CeloNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
