"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimismNetworkConfig = void 0;
const arbitrumNetworkConfig_1 = require("./arbitrumNetworkConfig");
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let OptimismNetworkConfig = class OptimismNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x4200000000000000000000000000000000000006'; // WETH;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.OPTIMISM;
    }
    getETHTokenAddrs() {
        return '0x4200000000000000000000000000000000000006';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getStablecoinTokenAddrs() {
        return '0x7f5c764cbc14f9669b88837ca1490cca17c31607';
    }
    getInitStartBlock() {
        return 1;
    }
    getNetworkName() {
        return 'Optimism';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curve-optimism-user-lp-transaction';
    }
    getCurveRegistryAddress() {
        return '0xC5cfaDA84E902aD92DD40194f0883ad49639b023';
    }
    getCoingeckoPlatformName() {
        return 'optimistic-ethereum';
    }
    getV3SubgraphUrl(_) {
        return 'https://api.thegraph.com/subgraphs/name/ianlapham/optimism-post-regenesis';
    }
    getNFTManagerContractAddress(_) {
        return arbitrumNetworkConfig_1.NFT_MANAGER_CONTRACT_ADDRESS;
    }
};
exports.OptimismNetworkConfig = OptimismNetworkConfig;
exports.OptimismNetworkConfig = OptimismNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], OptimismNetworkConfig);
//# sourceMappingURL=optimismNetworkConfig.js.map