"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeloNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let CeloNetworkConfig = class CeloNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x471ece3750da237f93b8e339c536989b8978a438'; // CELO;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.CELO;
    }
    getETHTokenAddrs() {
        return '0xe919f65739c26a42616b7b8eedc6b5524d1e3ac4';
    }
    getStablecoinTokenSym() {
        return 'CUSD';
    }
    getStablecoinTokenAddrs() {
        return '0x765de816845861e75a25fca122bb6898b8b1282a';
    }
    getInitStartBlock() {
        return 5272596;
    }
    getNetworkName() {
        return 'Celo';
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
        return 'celo';
    }
    getV3SubgraphUrl(_) {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/uniswap-v3-apy-vision-celo';
    }
    getNFTManagerContractAddress(_) {
        return '0x3d79edaabc0eab6f08ed885c05fc0b014290d95a';
    }
};
exports.CeloNetworkConfig = CeloNetworkConfig;
exports.CeloNetworkConfig = CeloNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], CeloNetworkConfig);
//# sourceMappingURL=celoNetworkConfig.js.map