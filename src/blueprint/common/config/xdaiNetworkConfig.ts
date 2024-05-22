import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '@src/constants';

export class XdaiNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 11813493;
  }

  getNetwork(): number {
    return Number(CHAINID.XDAI);
  }

  getNetworkName(): string {
    return 'Gnosis Chain';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
