"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FantomNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const constants_1 = require("@src/constants");
class FantomNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 3500000;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.FANTOM);
    }
    getNetworkName() {
        return 'Fantom';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.FantomNetworkConfig = FantomNetworkConfig;
//# sourceMappingURL=fantomNetworkConfig.js.map