"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaticNetworkConfig = void 0;
const arbitrumNetworkConfig_1 = require("./arbitrumNetworkConfig");
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let MaticNetworkConfig = class MaticNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'; // WMATIC;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.MATIC;
    }
    getStablecoinTokenAddrs() {
        return '0x2791bca1f2de4661ed88a30c99a7a9449aa84174';
    }
    getETHTokenAddrs() {
        return '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getInitStartBlock() {
        return 4931780;
    }
    getNetworkName() {
        return 'Polygon (Matic)';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curvepolygonuserlptransaction';
    }
    getCurveRegistryAddress() {
        return '0x094d12e5b541784701FD8d65F11fc0598FBC6332';
    }
    getCoingeckoPlatformName() {
        return 'polygon-pos';
    }
    getV3SubgraphUrl(providerKey) {
        const subgraphs = new Map();
        subgraphs.set('uniswapv3_matic', 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-polygon');
        subgraphs.set('quickswapv3_matic', 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap-v3');
        const subgraphUrl = subgraphs.get(providerKey);
        if (!subgraphUrl)
            throw Error(`subgraph url not found for provider ${providerKey}, please check!!!`);
        return subgraphUrl;
    }
    getNFTManagerContractAddress(providerKey) {
        const managers = new Map();
        managers.set('uniswapv3_matic', arbitrumNetworkConfig_1.NFT_MANAGER_CONTRACT_ADDRESS);
        managers.set('quickswapv3_matic', '0x8ef88e4c7cfbbac1c163f7eddd4b578792201de6');
        const contractAddress = managers.get(providerKey);
        if (!contractAddress)
            throw Error(`NFT Manager contract address not found for provider ${providerKey}}, please check!!!`);
        return contractAddress;
    }
};
exports.MaticNetworkConfig = MaticNetworkConfig;
exports.MaticNetworkConfig = MaticNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], MaticNetworkConfig);
//# sourceMappingURL=maticNetworkConfig.js.map