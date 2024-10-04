"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const constants_1 = require("../../../constants");
class ScrollNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.SCROLL);
    }
    getNetworkName() {
        return 'Scroll';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.ScrollNetworkConfig = ScrollNetworkConfig;
//# sourceMappingURL=scrollNetworkConfig.js.map