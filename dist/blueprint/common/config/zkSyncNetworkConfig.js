"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZkSyncNetworkConfig = void 0;
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
const constants_1 = require("../../../constants");
class ZkSyncNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.ZKSYNC);
    }
    getNetworkName() {
        return 'zkSync';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.ZkSyncNetworkConfig = ZkSyncNetworkConfig;
//# sourceMappingURL=zkSyncNetworkConfig.js.map