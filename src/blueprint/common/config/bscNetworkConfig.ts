import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class BscNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 586851;
  }

  getNetwork(): number {
    return Number(CHAINID.BSC);
  }

  getNetworkName(): string {
    return 'Binance Smart Chain';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
