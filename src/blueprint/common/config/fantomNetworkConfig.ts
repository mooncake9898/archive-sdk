import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class FantomNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 3500000;
  }

  getNetwork(): number {
    return Number(CHAINID.FANTOM);
  }

  getNetworkName(): string {
    return 'Fantom';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
