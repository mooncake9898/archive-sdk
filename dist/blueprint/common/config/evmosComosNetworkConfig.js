"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvmosCosmosNetworkConfig = void 0;
const constants_1 = require("../../../constants");
const baseEvmNetworkConfig_1 = require("./baseEvmNetworkConfig");
class EvmosCosmosNetworkConfig extends baseEvmNetworkConfig_1.BaseEvmNetworkConfig {
    constructor() {
        super();
    }
    getInitStartBlock() {
        return 1;
    }
    getNetwork() {
        return Number(constants_1.CHAINID.EVMOS);
    }
    getNetworkName() {
        return 'Evmos Cosmos';
    }
    isContractNameLookupEnabled() {
        return false;
    }
    getMainProviderUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'provider-does-not-exist';
        });
    }
}
exports.EvmosCosmosNetworkConfig = EvmosCosmosNetworkConfig;
//# sourceMappingURL=evmosComosNetworkConfig.js.map