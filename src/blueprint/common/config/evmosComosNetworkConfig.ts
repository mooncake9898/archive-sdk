import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class EvmosCosmosNetworkConfig extends BaseEvmNetworkConfig {
  constructor() {
    super();
  }

  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.EVMOS);
  }

  getNetworkName(): string {
    return 'Evmos Cosmos';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }

  async getMainProviderUrl(): Promise<string> {
    return 'provider-does-not-exist';
  }
}
