"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const constants_1 = require("../../../constants");
class BaseNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.BASE);
    }
    getNetworkName() {
        return 'Base';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BaseNetworkConfig = BaseNetworkConfig;
//# sourceMappingURL=baseNetworkConfig.js.map