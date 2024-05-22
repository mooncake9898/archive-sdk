import { BlueprintContext } from '../../models/blueprintContext';
import { EvmGasOracle } from '../gas/evmGasOracle';
import { GasOracle } from '../gas/gasOracle';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
import { CHAINID } from '@src/constants';

export class EvmosEvmNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number {
    return 1;
  }

  getNetwork(): number {
    return Number(CHAINID.EVMOS);
  }

  getNetworkName(): string {
    return 'Evmos Evm';
  }

  isContractNameLookupEnabled(): boolean {
    return true;
  }

  override getGasOracle(context: BlueprintContext): GasOracle {
    if (!this.gasOracle) {
      this.gasOracle = new EvmGasOracle(context);
    }
    return this.gasOracle;
  }
}
