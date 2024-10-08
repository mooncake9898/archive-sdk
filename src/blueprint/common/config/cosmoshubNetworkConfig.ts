import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class CosmoshubNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.COSMOSHUB);
  }

  getNetworkName(): string {
    return 'Cosmoshub';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
