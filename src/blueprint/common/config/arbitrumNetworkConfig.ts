import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '../../../constants';

export class ArbitrumNetworkConfig extends BaseEvmNetworkConfig {
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
