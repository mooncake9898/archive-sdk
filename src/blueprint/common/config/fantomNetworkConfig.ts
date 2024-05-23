import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '../../../constants';


export class FantomNetworkConfig extends BaseEvmNetworkConfig {
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
