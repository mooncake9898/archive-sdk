import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class ZkSyncNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.ZKSYNC);
  }

  getNetworkName(): string {
    return 'zkSync';
  }

  isContractNameLookupEnabled(): boolean {
    return false;
  }
}
