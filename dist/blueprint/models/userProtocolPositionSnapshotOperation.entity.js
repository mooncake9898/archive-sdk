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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProtocolPositionSnapshotOperation = void 0;
const models_1 = require("../models");
const models_2 = require("../models");
const models_3 = require("../models");
const bigNumberNumericTransformer_1 = require("./bigNumberNumericTransformer");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const typeorm_1 = require("typeorm");
let UserProtocolPositionSnapshotOperation = class UserProtocolPositionSnapshotOperation {
};
exports.UserProtocolPositionSnapshotOperation = UserProtocolPositionSnapshotOperation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserProtocolPositionSnapshotOperation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: models_3.OperationType,
    }),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperation.prototype, "operationType", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperation.prototype, "operationValueUsd", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperation.prototype, "adjustmentValueUsd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => models_2.UserProtocolPositionSnapshot, (userProtocolPositionSnapshot) => userProtocolPositionSnapshot.userProtocolPositionSnapshotOperations, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'userProtocolPositionSnapshotId' }),
    __metadata("design:type", Object)
], UserProtocolPositionSnapshotOperation.prototype, "userProtocolPositionSnapshot", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserProtocolPositionSnapshotOperation.prototype, "userProtocolPositionSnapshotId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => models_1.UserProtocolPositionSnapshotOperationToken, (userProtocolPositionSnapshotOperationToken) => userProtocolPositionSnapshotOperationToken.userProtocolPositionSnapshotOperation, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Object)
], UserProtocolPositionSnapshotOperation.prototype, "userProtocolPositionSnapshotOperationTokens", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserProtocolPositionSnapshotOperation.prototype, "warning", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], UserProtocolPositionSnapshotOperation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp without time zone',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserProtocolPositionSnapshotOperation.prototype, "updatedAt", void 0);
exports.UserProtocolPositionSnapshotOperation = UserProtocolPositionSnapshotOperation = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_protocol_position_snapshot_operations' }),
    (0, typeorm_1.Index)(['userProtocolPositionSnapshotId', 'operationType'])
], UserProtocolPositionSnapshotOperation);
//# sourceMappingURL=userProtocolPositionSnapshotOperation.entity.js.map