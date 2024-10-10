import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class ArbitrumNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 226828;
  }

  getNetwork(): number {
    return Number(CHAINID.ARBITRUM);
  }

  getNetworkName(): string {
    return 'Arbitrum';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
