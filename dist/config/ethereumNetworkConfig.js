"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthereumNetworkConfig = void 0;
const arbitrumNetworkConfig_1 = require("./arbitrumNetworkConfig");
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let EthereumNetworkConfig = class EthereumNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'; // WETH
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.ETHEREUM;
    }
    getStablecoinTokenAddrs() {
        return '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    }
    getETHTokenAddrs() {
        return '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getInitStartBlock() {
        return 9562480;
    }
    getNetworkName() {
        return 'Ethereum';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/non-main-amm-shares';
    }
    getCurveRegistryAddress() {
        return '0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5';
    }
    getCoingeckoPlatformName() {
        return 'ethereum';
    }
    getV3SubgraphUrl(_) {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision';
    }
    getNFTManagerContractAddress(_) {
        return arbitrumNetworkConfig_1.NFT_MANAGER_CONTRACT_ADDRESS;
    }
};
exports.EthereumNetworkConfig = EthereumNetworkConfig;
exports.EthereumNetworkConfig = EthereumNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], EthereumNetworkConfig);
//# sourceMappingURL=ethereumNetworkConfig.js.map