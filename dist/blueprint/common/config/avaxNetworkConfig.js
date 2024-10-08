"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaxNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class AvaxNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 56877;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.AVAX);
    }
    getNetworkName() {
        return 'Avalanche';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.AvaxNetworkConfig = AvaxNetworkConfig;
//# sourceMappingURL=avaxNetworkConfig.js.map