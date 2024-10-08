"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimismNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class OptimismNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1451262;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.OPTIMISM);
    }
    getNetworkName() {
        return 'Optimism';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.OptimismNetworkConfig = OptimismNetworkConfig;
//# sourceMappingURL=optimismNetworkConfig.js.map