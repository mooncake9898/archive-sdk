import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class XdaiNetworkConfig extends BaseEvmNetworkConfig {
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
