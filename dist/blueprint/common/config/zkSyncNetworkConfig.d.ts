import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class ZkSyncNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
}
