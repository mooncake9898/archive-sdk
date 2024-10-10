"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaticNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class MaticNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 4931780;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.MATIC);
    }
    getNetworkName() {
        return 'Polygon';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.MaticNetworkConfig = MaticNetworkConfig;
//# sourceMappingURL=maticNetworkConfig.js.map