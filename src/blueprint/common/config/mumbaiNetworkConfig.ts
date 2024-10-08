import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class MumbaiNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 0;
  }

  getNetwork(): number {
    return Number(CHAINID.MUMBAI);
  }

  getNetworkName(): string {
    return 'Mumbai';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
