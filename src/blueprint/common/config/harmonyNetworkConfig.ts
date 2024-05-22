import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '@src/constants';

export class HarmonyNetworkConfig extends BaseEvmNetworkConfig {
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
