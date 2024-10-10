"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEvmNetworkConfig = void 0;
const web3_wrapper_1 = require("../../../web3-wrapper");
const evmGasOracle_1 = require("../gas/evmGasOracle");
class BaseEvmNetworkConfig {
    getGasOracle(context) {
        if (!this.gasOracle) {
            this.gasOracle = new evmGasOracle_1.EvmGasOracle(context);
        }
        return this.gasOracle;
    }
    selectRpcUrl(rpcInfos) {
        var _a;
        if (!rpcInfos || rpcInfos.length)
            return null;
        return (_a = web3_wrapper_1.RPCOracle.randomSelectRpc(rpcInfos)) === null || _a === void 0 ? void 0 : _a.url;
    }
}
exports.BaseEvmNetworkConfig = BaseEvmNetworkConfig;
//# sourceMappingURL=baseEvmNetworkConfig.js.map