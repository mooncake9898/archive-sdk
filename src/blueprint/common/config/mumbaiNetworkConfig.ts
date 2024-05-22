import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '@src/constants';

export class MumbaiNetworkConfig extends BaseEvmNetworkConfig {
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
