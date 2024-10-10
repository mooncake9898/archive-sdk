import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class AvaxNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 56877;
  }

  getNetwork(): number {
    return Number(CHAINID.AVAX);
  }

  getNetworkName(): string {
    return 'Avalanche';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
