"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarmonyNetworkConfig = void 0;
const availableNetwork_1 = require("./availableNetwork");
const common_1 = require("@nestjs/common");
let HarmonyNetworkConfig = class HarmonyNetworkConfig {
    getBaseTokenForNetwork() {
        return '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a'; // ONE;
    }
    getInitStartBlock() {
        return 10178693;
    }
    getStablecoinTokenAddrs() {
        return '0x985458e523db3d53125813ed68c274899e9dfab4';
    }
    getETHTokenAddrs() {
        return '0x6983d1e6def3690c4d616b13597a09e6193ea013';
    }
    getStablecoinTokenSym() {
        return '1USDC';
    }
    getNetwork() {
        return availableNetwork_1.AvailableNetwork.HARMONY;
    }
    getNetworkName() {
        return 'Harmony';
    }
    getRandomBackupProviderUrl() {
        return null;
    }
    getCurveUserGraphUrl() {
        return 'https://graph.t.hmny.io/subgraphs/name/apyvision/curve-harmony-lp-transaction';
    }
    getCurveRegistryAddress() {
        return '';
    }
    getCoingeckoPlatformName() {
        return 'harmony-shard-0';
    }
    getV3SubgraphUrl(_) {
        return '';
    }
    getNFTManagerContractAddress(_) {
        return '';
    }
};
exports.HarmonyNetworkConfig = HarmonyNetworkConfig;
exports.HarmonyNetworkConfig = HarmonyNetworkConfig = __decorate([
    (0, common_1.Injectable)()
], HarmonyNetworkConfig);
//# sourceMappingURL=harmonyNetworkConfig.js.map