"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintMetadata = void 0;
const typeorm_1 = require("typeorm");
let BlueprintMetadata = class BlueprintMetadata {
};
exports.BlueprintMetadata = BlueprintMetadata;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlueprintMetadata.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlueprintMetadata.prototype, "blueprintId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        nullable: false,
    }),
    __metadata("design:type", Object)
], BlueprintMetadata.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BlueprintMetadata.prototype, "lastSyncAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], BlueprintMetadata.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp without time zone',
        nullable: true,
    }),
    __metadata("design:type", Date)
], BlueprintMetadata.prototype, "updatedAt", void 0);
exports.BlueprintMetadata = BlueprintMetadata = __decorate([
    (0, typeorm_1.Entity)({ name: 'blueprint_metadata' }),
    (0, typeorm_1.Index)(['blueprintId'], { unique: true })
], BlueprintMetadata);
//# sourceMappingURL=metadata.entity.js.map