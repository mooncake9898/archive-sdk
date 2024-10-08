"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOpGasOracle = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class NullOpGasOracle {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getTxnFeeUsd(_txn) {
        return Promise.resolve((0, bignumber_js_1.default)(0));
    }
}
exports.NullOpGasOracle = NullOpGasOracle;
//# sourceMappingURL=nullOpGasOracle.js.map