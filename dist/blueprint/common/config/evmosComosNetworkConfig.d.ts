import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class EvmosCosmosNetworkConfig extends BaseEvmNetworkConfig {
  constructor();
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
  getMainProviderUrl(): Promise<string>;
}
