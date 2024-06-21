"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCallResults = void 0;
const typeorm_1 = require("typeorm");
let ApiCallResults = class ApiCallResults {
};
exports.ApiCallResults = ApiCallResults;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], ApiCallResults.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 })
], ApiCallResults.prototype, "chainId", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ApiCallResults.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        nullable: false,
    })
], ApiCallResults.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp without time zone' })
], ApiCallResults.prototype, "createdAt", void 0);
exports.ApiCallResults = ApiCallResults = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Index)(['chainId', 'key'], { unique: true })
], ApiCallResults);
//# sourceMappingURL=apiCallResults.entity.js.map