"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MumbaiNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class MumbaiNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 0;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.MUMBAI);
    }
    getNetworkName() {
        return 'Mumbai';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.MumbaiNetworkConfig = MumbaiNetworkConfig;
//# sourceMappingURL=mumbaiNetworkConfig.js.map