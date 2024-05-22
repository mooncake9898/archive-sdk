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
exports.EvmGasOracle = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class EvmGasOracle {
    constructor(context) {
        this.context = context;
    }
    getTxnFeeUsd(txn, gasUsed) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gasTokenPrice = yield this.context.getExchangePrice().getBaseGasTokenPrice(txn.blockNumber);
                if (!gasTokenPrice)
                    return (0, bignumber_js_1.default)(0);
                return gasUsed.multipliedBy((0, bignumber_js_1.default)(gasTokenPrice));
            }
            catch (_a) {
                this.context.getLogger().warn(`Could not fetch tx fee from tx ${txn.txHash}, returning 0 as gas`);
                (0, bignumber_js_1.default)(0);
            }
        });
    }
}
exports.EvmGasOracle = EvmGasOracle;
//# sourceMappingURL=evmGasOracle.js.map