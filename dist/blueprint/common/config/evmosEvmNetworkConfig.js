"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmosEvmNetworkConfig = void 0;
const evmGasOracle_1 = require("../../../blueprint/common/gas/evmGasOracle");
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class EvmosEvmNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.EVMOS);
    }
    getNetworkName() {
        return 'Evmos Evm';
    }
    isContractNameLookupEnabled() {
        return true;
    }
    getGasOracle(context) {
        if (!this.gasOracle) {
            this.gasOracle = new evmGasOracle_1.EvmGasOracle(context);
        }
        return this.gasOracle;
    }
}
exports.EvmosEvmNetworkConfig = EvmosEvmNetworkConfig;
//# sourceMappingURL=evmosEvmNetworkConfig.js.map