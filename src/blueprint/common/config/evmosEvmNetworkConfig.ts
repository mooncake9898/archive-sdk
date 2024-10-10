import { EvmGasOracle } from '../../../blueprint/common/gas/evmGasOracle';
import { GasOracle } from '../../../blueprint/common/gas/gasOracle';
import { BlueprintContext } from '../../../blueprint/models';
import { CHAINID } from '../../../constants';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export abstract class EvmosEvmNetworkConfig extends BaseEvmNetworkConfig {
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
