import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class ScrollNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.SCROLL);
  }

  getNetworkName(): string {
    return 'Scroll';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
