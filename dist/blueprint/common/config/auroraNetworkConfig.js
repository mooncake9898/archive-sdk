"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class AuroraNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 45999977;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.AURORA);
    }
    getNetworkName() {
        return 'Aurora';
    }
    isContractNameLookupEnabled() {
        return true;
    }
}
exports.AuroraNetworkConfig = AuroraNetworkConfig;
//# sourceMappingURL=auroraNetworkConfig.js.map