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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaTokenMetadataOracle = void 0;
const models_1 = require("../../models");
const axios_1 = __importDefault(require("axios"));
class SolanaTokenMetadataOracle {
    constructor(context) {
        this.context = context;
    }
    getMetadata(tokenInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenAddress = tokenInfo.identifier;
            try {
                const response = yield axios_1.default.get(`https://token-list-api.solana.cloud/v1/search?query=${tokenAddress}&start=0&limit=5&chainId=101`);
                const token = response.data.content.find((i) => i.address === tokenAddress);
                if (!token) {
                    return new models_1.TokenMetadata(tokenAddress, 'NOTFOUND', 'NOTFOUND', 9);
                }
                return new models_1.TokenMetadata(token.address, token.name, token.symbol, token.decimals);
            }
            catch (e) {
                this.context.getLogger().error('Could not fetch token metadata', e.message, e.stack);
                return new models_1.TokenMetadata(tokenInfo.identifier, tokenInfo.identifier, '', 9);
            }
        });
    }
}
exports.SolanaTokenMetadataOracle = SolanaTokenMetadataOracle;
//# sourceMappingURL=solanaTokenMetadataOracle.js.map