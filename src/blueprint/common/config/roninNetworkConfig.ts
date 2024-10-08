import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class RoninNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 8091783;
  }

  getNetwork(): number {
    return Number(CHAINID.RONIN);
  }

  getNetworkName(): string {
    return 'Ronin';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
