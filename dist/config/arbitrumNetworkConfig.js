"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrumNetworkConfig = exports.NFT_MANAGER_CONTRACT_ADDRESS = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
exports.NFT_MANAGER_CONTRACT_ADDRESS = '0xc36442b4a4522e871399cd717abdd847ab11fe88';
let ArbitrumNetworkConfig = class ArbitrumNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'; // ETH
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.ARBITRUM;
    }
    getETHTokenAddrs() {
        return '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getStablecoinTokenAddrs() {
        return '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8';
    }
    getInitStartBlock() {
        return 226828;
    }
    getNetworkName() {
        return 'Arbitrum';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curvearbitrumuserlptransactions';
    }
    getCurveRegistryAddress() {
        return '0x445fe580ef8d70ff569ab36e80c647af338db351';
    }
    getCoingeckoPlatformName() {
        return 'arbitrum-one';
    }
    getV3SubgraphUrl(_) {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-arbitrum';
    }
    getNFTManagerContractAddress(_) {
        return exports.NFT_MANAGER_CONTRACT_ADDRESS;
    }
};
exports.ArbitrumNetworkConfig = ArbitrumNetworkConfig;
exports.ArbitrumNetworkConfig = ArbitrumNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], ArbitrumNetworkConfig);
//# sourceMappingURL=arbitrumNetworkConfig.js.map