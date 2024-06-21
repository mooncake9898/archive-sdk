"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FantomNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let FantomNetworkConfig = class FantomNetworkConfig {
    getBaseTokenForNetwork() {
        return '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83'; // WFTM
    }
    getInitStartBlock() {
        return 3500000;
    }
    getStablecoinTokenAddrs() {
        return '0x04068da6c83afcfa0e13ba15a6696662335d5b75';
    }
    getETHTokenAddrs() {
        return '0x74b23882a30290451a17c44f4f05243b6b58c76d';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.FANTOM;
    }
    getNetworkName() {
        return 'Fantom';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curvefantomuserlptransaction';
    }
    getCurveRegistryAddress() {
        return '0x0f854ea9f38cea4b1c2fc79047e9d0134419d5d6';
    }
    getCoingeckoPlatformName() {
        return 'fantom';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '';
    }
};
exports.FantomNetworkConfig = FantomNetworkConfig;
exports.FantomNetworkConfig = FantomNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], FantomNetworkConfig);
//# sourceMappingURL=fantomNetworkConfig.js.map