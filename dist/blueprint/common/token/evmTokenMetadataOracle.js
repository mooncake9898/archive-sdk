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
exports.EvmTokenMetadataOracle = void 0;
const tokenMetadata_1 = require("../../models/tokenMetadata");
const constants_1 = require("../../models/constants");
class EvmTokenMetadataOracle {
    // private contractReader: EvmContractReader;
    constructor(context) {
        this.context = context;
    }
    // TODO use multicall instead of calling 3 different times to get the information
    getMetadata(tokenInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.contractReader = this.context.getContractReader();
            try {
                const [tokenName, tokenSymbol, decimals] = yield Promise.all([
                    this.getTokenName(tokenInfo.identifier),
                    // this.contractReader.getTokenSym(tokenInfo.identifier),
                    "TEST TOKEN",
                    this.getDecimalPlaces(tokenInfo.identifier),
                ]);
                return new tokenMetadata_1.TokenMetadata(tokenInfo.identifier, tokenName, tokenSymbol, decimals);
            }
            catch (e) {
                this.context.getLogger().error('Could not fetch token metadata', e.message, e.stack);
                return new tokenMetadata_1.TokenMetadata(tokenInfo.identifier, tokenInfo.identifier, '()', 18);
            }
        });
    }
    getTokenName(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            if (identifier == constants_1.ETHER_GAS_TOKEN_IDENTIFIER) {
                return Promise.resolve(constants_1.ETHER_GAS_TOKEN_SYMBOL);
            }
            // return await this.contractReader.getTokenNameElseReturnTokenAddress(identifier);
            return "Test Token";
        });
    }
    getDecimalPlaces(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            if (identifier == constants_1.ETHER_GAS_TOKEN_IDENTIFIER) {
                return Promise.resolve(constants_1.ETHER_GAS_TOKEN_DECIMALS);
            }
            // return await this.contractReader.getDecimalPlaces(identifier);
            return 18;
        });
    }
}
exports.EvmTokenMetadataOracle = EvmTokenMetadataOracle;
//# sourceMappingURL=evmTokenMetadataOracle.js.map