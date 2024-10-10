import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class AuroraNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 45999977;
  }

  getNetwork(): number {
    return Number(CHAINID.AURORA);
  }

  getNetworkName(): string {
    return 'Aurora';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
