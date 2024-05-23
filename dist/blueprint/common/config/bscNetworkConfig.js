"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BscNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const constants_1 = require("../../../constants");
class BscNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 586851;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.BSC);
    }
    getNetworkName() {
        return 'Binance Smart Chain';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BscNetworkConfig = BscNetworkConfig;
//# sourceMappingURL=bscNetworkConfig.js.map