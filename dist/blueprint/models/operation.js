"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class Operation {
    constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    operation, 
    // tokens sent from user to protocol
    inputTokens, 
    // tokens sent from protocol to user
    outputTokens, 
    /** Amount of 'shares' added/removed in this operation, it's positive if shares were added, negative if shares were removed */
    amountAdded = (0, bignumber_js_1.default)(0), 
    /** The fee (in USD) that the protocol took from the user as a platform toll (ie. liquidation fee) */
    adjustmentValueUsd = 0) {
        this.operation = operation;
        this.inputTokens = inputTokens;
        this.outputTokens = outputTokens;
        this.amountAdded = amountAdded;
        this.adjustmentValueUsd = adjustmentValueUsd;
    }
}
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map