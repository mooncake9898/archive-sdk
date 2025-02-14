"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerachainNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class BerachainNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.BERACHAIN);
    }
    getNetworkName() {
        return 'Berachain';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BerachainNetworkConfig = BerachainNetworkConfig;
//# sourceMappingURL=berachainNetworkConfig.js.map