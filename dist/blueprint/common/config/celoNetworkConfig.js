"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeloNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class CeloNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 5272596;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.CELO);
    }
    getNetworkName() {
        return 'Celo';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.CeloNetworkConfig = CeloNetworkConfig;
//# sourceMappingURL=celoNetworkConfig.js.map