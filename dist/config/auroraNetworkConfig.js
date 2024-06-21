"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let AuroraNetworkConfig = class AuroraNetworkConfig {
    getStablecoinTokenSym() {
        throw new Error('Method not implemented.');
    }
    getNFTManagerContractAddress() {
        throw new Error('Method not implemented.');
    }
    getCurveUserGraphUrl() {
        throw new Error('Method not implemented.');
    }
    getCurveRegistryAddress() {
        throw new Error('Method not implemented.');
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getV3SubgraphUrl() {
        throw new Error('Method not implemented.');
    }
    getCoingeckoPlatformName() {
        throw new Error('Method not implemented.');
    }
    getNFTManagerContractAddressts() {
        throw new Error('Method not implemented.');
    }
    getStablecoinTokenAddrs() {
        throw new Error('Method not implemented.');
    }
    getVisionETHPairAddresses() {
        throw new Error('Method not implemented.');
    }
    getVisionETHPoolAddress() {
        throw new Error('Method not implemented.');
    }
    getMinPoolUsdValue() {
        throw new Error('Method not implemented.');
    }
    getUserLPTransactionsUrls() {
        throw new Error('Method not implemented.');
    }
    getUniV3UserLPTxnUrl() {
        throw new Error('Method not implemented.');
    }
    getPastLogBlockSize() {
        throw new Error('Method not implemented.');
    }
    getAlchemyUrl() {
        throw new Error('Method not implemented.');
    }
    getBaseTokenForNetwork() {
        return '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb'; // WETH
    }
    getInitStartBlock() {
        return 0;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.AURORA;
    }
    getBasePoolProviderKey() {
        return 'trisolaris_aurora';
    }
    getProtocolKeys() {
        return [];
    }
    getNetworkName() {
        return 'Aurora';
    }
    getBlocksInOneDay() {
        return 7000;
    }
    getBlocksInTenMins() {
        return 48;
    }
    isContractNameLookupEnabled() {
        return true;
    }
    getExplorerUrl() {
        return 'https://aurorascan.dev/';
    }
    getAbiApiUrl(contractAddress) {
        return `https://explorer.mainnet.aurora.dev/api?module=contract&action=getabi&address=${contractAddress}`;
    }
    isArchivalRPC() {
        return true;
    }
    getETHTokenAddrs() {
        return '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb'; // WETH
    }
};
exports.AuroraNetworkConfig = AuroraNetworkConfig;
exports.AuroraNetworkConfig = AuroraNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], AuroraNetworkConfig);
//# sourceMappingURL=auroraNetworkConfig.js.map