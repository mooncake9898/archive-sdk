import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class CeloNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 5272596;
  }

  getNetwork(): number {
    return Number(CHAINID.CELO);
  }

  getNetworkName(): string {
    return 'Celo';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
