"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoninNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let RoninNetworkConfig = class RoninNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5'; // WETH;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.RONIN;
    }
    getETHTokenAddrs() {
        return '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5';
    }
    getStablecoinTokenSym() {
        return 'USDC';
    }
    getStablecoinTokenAddrs() {
        return '0xa7964991f339668107e2b6a6f6b8e8b74aa9d017';
    }
    getInitStartBlock() {
        return 8091783;
    }
    getNetworkName() {
        return 'Ronin';
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
        return 'ronin';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '';
    }
};
exports.RoninNetworkConfig = RoninNetworkConfig;
exports.RoninNetworkConfig = RoninNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], RoninNetworkConfig);
//# sourceMappingURL=roninNetworkConfig.js.map