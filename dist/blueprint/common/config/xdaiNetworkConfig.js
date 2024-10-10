"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XdaiNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class XdaiNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 11813493;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.XDAI);
    }
    getNetworkName() {
        return 'Gnosis Chain';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.XdaiNetworkConfig = XdaiNetworkConfig;
//# sourceMappingURL=xdaiNetworkConfig.js.map