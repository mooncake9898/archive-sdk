"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BerachainTestNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class BerachainTestNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.BERACHAIN_TESTNET);
    }
    getNetworkName() {
        return 'Berachain Testnet';
    }
    isContractNameLookupEnabled() {
        return false;
    }
}
exports.BerachainTestNetworkConfig = BerachainTestNetworkConfig;
//# sourceMappingURL=berachainTestNetworkConfig.js.map