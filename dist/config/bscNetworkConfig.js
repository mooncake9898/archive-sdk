"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BscNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let BscNetworkConfig = class BscNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'; // WBNB;
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.BSC;
    }
    getETHTokenAddrs() {
        return '0x2aab30a909748945d42c7d29d3cd44a5680cab1d';
    }
    getStablecoinTokenSym() {
        return 'BUSD';
    }
    getStablecoinTokenAddrs() {
        return '0xe9e7cea3dedca5984780bafc599bd69add087d56';
    }
    getInitStartBlock() {
        return 586851;
    }
    getNetworkName() {
        return 'Binance Smart Chain';
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
        return 'binance-smart-chain';
    }
    getV3SubgraphUrl(_) {
        return 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-bsc?source=uniswap';
    }
    getNFTManagerContractAddress(providerKey) {
        switch (providerKey) {
            case 'pancakeswap_v3_bsc':
                return '0x46a15b0b27311cedf172ab29e4f4766fbe7f4364';
            case 'uniswap_v3_bsc':
                return '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
            default:
                return '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613';
        }
    }
};
exports.BscNetworkConfig = BscNetworkConfig;
exports.BscNetworkConfig = BscNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], BscNetworkConfig);
//# sourceMappingURL=bscNetworkConfig.js.map