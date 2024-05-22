"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEvmNetworkConfig = void 0;
const evmGasOracle_1 = require("../gas/evmGasOracle");
const evmTokenMetadataOracle_1 = require("../token/evmTokenMetadataOracle");
class BaseEvmNetworkConfig {
    getTokenMetadataOracle(context) {
        if (!this.tokenMetadataOracle) {
            this.tokenMetadataOracle = new evmTokenMetadataOracle_1.EvmTokenMetadataOracle(context);
        }
        return this.tokenMetadataOracle;
    }
    getGasOracle(context) {
        if (!this.gasOracle) {
            this.gasOracle = new evmGasOracle_1.EvmGasOracle(context);
        }
        return this.gasOracle;
    }
}
exports.BaseEvmNetworkConfig = BaseEvmNetworkConfig;
//# sourceMappingURL=baseEvmNetworkConfig.js.map