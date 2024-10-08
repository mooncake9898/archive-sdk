import { GasOracle } from '../../../blueprint/common/gas/gasOracle';
import { BlueprintContext } from '../../../blueprint/models';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';

export declare abstract class EvmosEvmNetworkConfig extends BaseEvmNetworkConfig {
  getInitStartBlock(): number;
  getNetwork(): number;
  getNetworkName(): string;
  isContractNameLookupEnabled(): boolean;
  getGasOracle(context: BlueprintContext): GasOracle;
}
