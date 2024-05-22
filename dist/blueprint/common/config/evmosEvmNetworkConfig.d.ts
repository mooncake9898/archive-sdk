import { BlueprintContext } from '../../models/blueprintContext';
import { GasOracle } from '../gas/gasOracle';
import { BaseEvmNetworkConfig } from './baseEvmNetworkConfig';
export declare class EvmosEvmNetworkConfig extends BaseEvmNetworkConfig {
    getInitStartBlock(): number;
    getNetwork(): number;
    getNetworkName(): string;
    isContractNameLookupEnabled(): boolean;
    getGasOracle(context: BlueprintContext): GasOracle;
}
