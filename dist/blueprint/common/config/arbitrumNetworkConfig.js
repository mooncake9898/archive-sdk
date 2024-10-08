"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class ArbitrumNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 226828;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.ARBITRUM);
    }
    getNetworkName() {
        return 'Arbitrum';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.ArbitrumNetworkConfig = ArbitrumNetworkConfig;
//# sourceMappingURL=arbitrumNetworkConfig.js.map