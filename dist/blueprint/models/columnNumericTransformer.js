"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumericTransformer = void 0;
/// ColumnNumericTransformer
class ColumnNumericTransformer {
    to(data) {
        return data;
    }
    from(data) {
        return parseFloat(data);
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
//# sourceMappingURL=columnNumericTransformer.js.map