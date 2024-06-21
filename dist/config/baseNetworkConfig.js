"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
class BaseNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x4200000000000000000000000000000000000006'; // wETH
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.BASE;
    }
    getETHTokenAddrs() {
        return this.getBaseTokenForNetwork();
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getStablecoinTokenAddrs() {
        return '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
    }
    getInitStartBlock() {
        return 1;
    }
    getNetworkName() {
        return 'Base';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return '';
    }
    getCurveRegistryAddress() {
        return '';
    }
    getCoingeckoPlatformName() {
        return 'base';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '0x03a520b32c04bf3beef7beb72e919cf822ed34f1'; // base non fungible position manager => https://basescan.org/address/0x03a520b32c04bf3beef7beb72e919cf822ed34f1
    }
}
exports.BaseNetworkConfig = BaseNetworkConfig;
//# sourceMappingURL=baseNetworkConfig.js.map