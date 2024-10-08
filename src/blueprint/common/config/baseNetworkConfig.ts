import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class BaseNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.BASE);
  }

  getNetworkName(): string {
    return 'Base';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
