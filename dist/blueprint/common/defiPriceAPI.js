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
exports.DefiPriceAPI = void 0;
const constants_1 = require("../models/constants");
const tokenPriceDto_1 = require("../models/tokenPriceDto");
const requestUtils_1 = require("./requestUtils");
// import { transformProviderKey } from '@src/common/lib/utils';
const axios_1 = require("../../axios");
const axios_2 = __importDefault(require("axios"));
class DefiPriceAPI {
    constructor(context) {
        this.context = context;
        // TODO: override default value
        // this.baseUrl = context.getConfigService().get<string>('DEFI_PRICE_BASE_URL');
        this.baseUrl = 'https://price.archiveprotocol.com';
    }
    getLpPriceAt(tokenAddrs, poolProviderKey, block = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const priceDto = yield this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 1, poolProviderKey);
            return priceDto;
        });
    }
    getPriceOf(tokenAddrs, poolProviderKey, block = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 0, poolProviderKey);
        });
    }
    /**
     * We don't know anything about this token, so let the service handle it (though this is much slower since
     * it has to try to look up the token).
     */
    getGenericLpPrice(tokenAddrs, block = 0) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const priceObj = yield this.callPriceApi(this.context.getNetwork(), tokenAddrs, block, 1);
            return (_a = priceObj === null || priceObj === void 0 ? void 0 : priceObj.price) !== null && _a !== void 0 ? _a : 0;
        });
    }
    /**
     * We don't know anything about this token, so let the service handle it (though this is much slower since
     * it has to try to look up the token).
     */
    getGenericPrice(tokenAddrs, block = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.callPriceApi(this.context.getNetwork(), tokenAddrs, block);
        });
    }
    getBaseGasTokenPrice(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // when blockNumber parameter is 0, we fetch the latest timestamp so we don't cache the result
            const cacheDuration = blockNumber == 0 ? axios_1.CacheDuration.NO_CACHE : axios_1.CacheDuration.SHORT_CACHE_DURATION;
            const network = this.context.getNetwork();
            // TODO: use APAxios
            // const axios = await this.context.getAxios(cacheDuration);
            const url = this.baseUrl + `/networkGasTokenPrice/${network}/${blockNumber}`;
            const config = {
                headers: (0, requestUtils_1.getRequestHeaders)(),
            };
            try {
                const response = yield axios_2.default.get(url, config);
                if (!response || !response.data) {
                    this.context
                        .getLogger()
                        .error(`Invalid response with getBaseGasTokenPrice. blockNumber: ${blockNumber} on network ${network}. stacktrace: ${new Error().stack}`);
                    return 0;
                }
                return response.data.price;
            }
            catch (e) {
                const msg = (0, requestUtils_1.generateAxiosErrorMessage)('getBaseGasTokenPrice', url, e);
                this.context.getLogger().error(msg);
                return 0;
            }
        });
    }
    getBTCPriceAt(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.callPriceApi(1, constants_1.BTC_ADDRESS_MAINNET, blockNumber, 0);
        });
    }
    getETHPriceAt(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.callPriceApi(1, constants_1.ETH_ADDRESS_MAINNET, blockNumber, 0);
        });
    }
    callPriceApi(networkId, tokenAddrs, block = 0, type, poolProviderKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (block == null) {
                this.context
                    .getLogger()
                    .error(`block parameter is null in callPriceApi(). networkId: ${networkId}, tokenAddrs: ${tokenAddrs}, type: ${type}, poolProviderKey: ${poolProviderKey}. stacktrace: ${new Error().stack}`);
            }
            // when block parameter is 0, we fetch the latest timestamp so we don't cache the result
            const cacheDuration = block == 0 ? axios_1.CacheDuration.NO_CACHE : axios_1.CacheDuration.SHORT_CACHE_DURATION;
            // TODO: use APAxios
            // const axios = await this.context.getAxios(cacheDuration);
            const url = this.baseUrl + `/priceByBlock/${networkId}/${tokenAddrs}/${block}`;
            const params = {
                type: type,
                // source: transformProviderKey(poolProviderKey),
                source: poolProviderKey,
            };
            const headers = (0, requestUtils_1.getRequestHeaders)();
            try {
                const response = yield axios_2.default.get(url, {
                    params,
                    headers,
                });
                if (!response || !response.data) {
                    this.context
                        .getLogger()
                        .error(`Invalid response with callPriceApi. url: ${url}, params: ${JSON.stringify(params)}. stacktrace: ${new Error().stack}`);
                    return new tokenPriceDto_1.TokenPriceDto(0, '', -1);
                }
                return new tokenPriceDto_1.TokenPriceDto(response.data.price, response.data.source, response.data.tokenType);
            }
            catch (e) {
                const msg = (0, requestUtils_1.generateAxiosErrorMessage)('callPriceApi', url, e, params);
                this.context.getLogger().error(msg);
                return new tokenPriceDto_1.TokenPriceDto(0, '', -1);
            }
        });
    }
}
exports.DefiPriceAPI = DefiPriceAPI;
//# sourceMappingURL=defiPriceAPI.js.map