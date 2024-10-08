"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoninNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class RoninNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 8091783;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.RONIN);
    }
    getNetworkName() {
        return 'Ronin';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.RoninNetworkConfig = RoninNetworkConfig;
//# sourceMappingURL=roninNetworkConfig.js.map