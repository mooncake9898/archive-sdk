"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmoshubNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class CosmoshubNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.COSMOSHUB);
    }
    getNetworkName() {
        return 'Cosmoshub';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.CosmoshubNetworkConfig = CosmoshubNetworkConfig;
//# sourceMappingURL=cosmoshubNetworkConfig.js.map