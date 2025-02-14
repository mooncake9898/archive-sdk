import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class BerachainTestNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.BERACHAIN_TESTNET);
  }

  getNetworkName(): string {
    return 'Berachain Testnet';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
