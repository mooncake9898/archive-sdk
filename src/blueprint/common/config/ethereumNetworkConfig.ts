import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class EthereumNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 9562480;
  }

  getNetwork(): number {
    return Number(CHAINID.ETHEREUM);
  }

  getNetworkName(): string {
    return 'Ethereum';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }
}
