"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvaxNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let AvaxNetworkConfig = class AvaxNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'; // AVAX;
    }
    getETHTokenAddrs() {
        return '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab';
    }
    getInitStartBlock() {
        return 56877;
    }
    getStablecoinTokenAddrs() {
        return '0xc7198437980c041c805a1edcba50c1ce5db95118';
    }
    getStablecoinTokenSym() {
        return 'USDT.e';
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.AVAX;
    }
    getNetworkName() {
        return 'Avalanche';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curve-avax-user-lp-transaction';
    }
    getCurveRegistryAddress() {
        return '0x8474ddbe98f5aa3179b3b3f5942d724afcdec9f6';
    }
    getCoingeckoPlatformName() {
        return 'avalanche';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '0x655c406ebfa14ee2006250925e54ec43ad184f8b'; //https://snowtrace.io/address/0x655c406ebfa14ee2006250925e54ec43ad184f8b#code
    }
};
exports.AvaxNetworkConfig = AvaxNetworkConfig;
exports.AvaxNetworkConfig = AvaxNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], AvaxNetworkConfig);
//# sourceMappingURL=avaxNetworkConfig.js.map