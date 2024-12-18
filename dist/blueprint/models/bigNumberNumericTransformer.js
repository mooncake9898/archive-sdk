"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigNumberNumericTransformer = void 0;
const LoggerManager_1 = require("../../logging/LoggerManager");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
// bigNumberNumericTransformer
class BigNumberNumericTransformer {
    to(data) {
        try {
            if (!data) {
                return null;
            }
            return data.toFixed(data.decimalPlaces());
        }
        catch (e) {
            LoggerManager_1.LoggerManager.getLogger().warn(`Cannot convert ${data} to string, returning 0`);
            return (0, bignumber_js_1.default)(0).toString();
        }
    }
    from(data) {
        if (!data) {
            return null;
        }
        return (0, bignumber_js_1.default)(data);
    }
}
exports.BigNumberNumericTransformer = BigNumberNumericTransformer;
//# sourceMappingURL=bigNumberNumericTransformer.js.map