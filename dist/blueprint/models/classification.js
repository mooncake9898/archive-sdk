"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classification = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class Classification {
    constructor(operations, positionIdentifier, gasTokenAmount = (0, bignumber_js_1.default)(0), positionShareDetails) {
        this.operations = operations;
        this.positionIdentifier = positionIdentifier;
        this.gasTokenAmount = gasTokenAmount;
        this.positionShareDetails = positionShareDetails;
    }
    getSharesAdded() {
        if (this.operations.length == 0)
            return (0, bignumber_js_1.default)(0);
        return this.operations.reduce((toll, operation) => toll.plus(operation.amountAdded), (0, bignumber_js_1.default)(0));
    }
    getAdjustmentValueUsd() {
        if (this.operations.length == 0)
            return (0, bignumber_js_1.default)(0);
        return this.operations.reduce((toll, operation) => toll.plus(operation.adjustmentValueUsd), (0, bignumber_js_1.default)(0));
    }
}
exports.Classification = Classification;
//# sourceMappingURL=classification.js.map