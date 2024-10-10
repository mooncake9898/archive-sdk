import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class HarmonyNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 10178693;
  }

  getNetwork(): number {
    return Number(CHAINID.HARMONY);
  }

  getNetworkName(): string {
    return 'Harmony';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
