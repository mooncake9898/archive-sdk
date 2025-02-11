import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class BerachainNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.BERACHAIN);
  }

  getNetworkName(): string {
    return 'Berachain';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
