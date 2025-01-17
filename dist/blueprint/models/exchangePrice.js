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
exports.ExchangePrice = void 0;
const constants_1 = require("../../constants");
class ExchangePrice {
    constructor(context) {
        this.context = context;
        this.priceApi = context.getDefiPriceAPI();
    }
    /**
     * Will try to get the price of a token without a pool provider key
     */
    getGenericPriceOfAt(tokenAddress, block) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.priceApi.getGenericPrice(tokenAddress, block);
        });
    }
    getPriceOfAt(tokenAddress, poolProviderKey, block) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.priceApi.getPriceOf(tokenAddress, poolProviderKey, block);
        });
    }
    getReceiptTokenPriceAt(tokenAddress_1, poolProviderKey_1) {
        return __awaiter(this, arguments, void 0, function* (tokenAddress, poolProviderKey, blockNumber = 0) {
            return yield this.priceApi.getLpPriceAt(tokenAddress, poolProviderKey, blockNumber);
        });
    }
    getBaseGasTokenPrice(blockNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.priceApi.getBaseGasTokenPrice(blockNumber);
        });
    }
    /*
     * Returns the price of ETH on ethereum network at 'timestamp'
     */
    getETHPriceAt(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (timestamp === 0) {
                return this.priceApi.getETHPriceAt(0);
            }
            const timestampInSeconds = this.convertTimestampToSeconds(timestamp);
            const blockNumber = yield this.context
                .getBlockByDateApi()
                .getBlockFromTimestamp(timestampInSeconds, String(constants_1.CHAINID.ETHEREUM));
            return this.priceApi.getETHPriceAt(blockNumber);
        });
    }
    /*
     * Returns the price of BTC on ethereum network at 'timestamp'
     */
    getBTCPriceAt(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            if (timestamp === 0) {
                return this.priceApi.getBTCPriceAt(0);
            }
            const timestampInSeconds = this.convertTimestampToSeconds(timestamp);
            const blockNumber = yield this.context
                .getBlockByDateApi()
                .getBlockFromTimestamp(timestampInSeconds, String(constants_1.CHAINID.ETHEREUM));
            return this.priceApi.getBTCPriceAt(blockNumber);
        });
    }
    convertTimestampToSeconds(timestamp) {
        // ToDo - AP-806
        // We convert timestamp to seconds since issues arise when block-by-date is storing ms timestamps (AP-806)
        const timestampInSeconds = timestamp.toString().length === 13 ? Math.floor(timestamp / 1000) : timestamp;
        return timestampInSeconds;
    }
}
exports.ExchangePrice = ExchangePrice;
//# sourceMappingURL=exchangePrice.js.map