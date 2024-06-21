"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XdaiNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let XdaiNetworkConfig = class XdaiNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d'; // xDAI;
    }
    getETHTokenAddrs() {
        return '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1';
    }
    getInitStartBlock() {
        return 11813493;
    }
    getStablecoinTokenAddrs() {
        return '0x4ecaba5870353805a9f068101a40e0f32ed605c6';
    }
    getStablecoinTokenSym() {
        return 'USDT';
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.XDAI;
    }
    getNetworkName() {
        return 'XDai';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://api.thegraph.com/subgraphs/name/apyvision/curvexdaiuserlptransaction';
    }
    getCurveRegistryAddress() {
        return '0x55e91365697eb8032f98290601847296ec847210';
    }
    getCoingeckoPlatformName() {
        return 'xdai';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '';
    }
};
exports.XdaiNetworkConfig = XdaiNetworkConfig;
exports.XdaiNetworkConfig = XdaiNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], XdaiNetworkConfig);
//# sourceMappingURL=xdaiNetworkConfig.js.map