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
exports.UserProtocolPositionSnapshotOperationToken = void 0;
const models_1 = require("../models");
const models_2 = require("../models");
const bigNumberNumericTransformer_1 = require("./bigNumberNumericTransformer");
const columnNumericTransformer_1 = require("./columnNumericTransformer");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const typeorm_1 = require("typeorm");
let UserProtocolPositionSnapshotOperationToken = class UserProtocolPositionSnapshotOperationToken {
};
exports.UserProtocolPositionSnapshotOperationToken = UserProtocolPositionSnapshotOperationToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserProtocolPositionSnapshotOperationToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: models_2.TokenDirection,
    }),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenDirection", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: models_2.TokenType,
    }),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: models_2.TokenTag,
        default: models_2.TokenTag.EMPTY,
    }),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenRawAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { transformer: new columnNumericTransformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], UserProtocolPositionSnapshotOperationToken.prototype, "decimals", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "totalAmountDeposited", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "totalAmountWithdrawn", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenIncomeUsd", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "amountDepositedChange", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "amountWithdrawnChange", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "amountIncomeChange", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenPriceUsd", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenPriceSource", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenAmountAtBlock", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "netTokenAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true, default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "ifHeldAllAmountToken", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true, default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "ifHeldAmountToken", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "exitedIfHeldAmountToken", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "exitedIfHeldAllAmountToken", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), default: 0 }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "tokenValueUsd", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserProtocolPositionSnapshotOperationToken.prototype, "isVirtualToken", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "cumulativeCollectedIncomeAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "cumulativeCollectedIncomeUsd", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "exitedCumulativeCollectedIncomeAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "exitedCumulativeCollectedIncomeUsd", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "baseTokenCostUsd", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { transformer: new bigNumberNumericTransformer_1.BigNumberNumericTransformer(), nullable: true }),
    __metadata("design:type", bignumber_js_1.default)
], UserProtocolPositionSnapshotOperationToken.prototype, "baseTokenPriceUsd", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => models_1.UserProtocolPositionSnapshotOperation, (userProtocolPositionSnapshotOperation) => userProtocolPositionSnapshotOperation.userProtocolPositionSnapshotOperationTokens, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'userProtocolPositionSnapshotOperationId' }),
    __metadata("design:type", Object)
], UserProtocolPositionSnapshotOperationToken.prototype, "userProtocolPositionSnapshotOperation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)(),
    __metadata("design:type", Number)
], UserProtocolPositionSnapshotOperationToken.prototype, "userProtocolPositionSnapshotOperationId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        array: false,
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserProtocolPositionSnapshotOperationToken.prototype, "warning", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], UserProtocolPositionSnapshotOperationToken.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp without time zone',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserProtocolPositionSnapshotOperationToken.prototype, "updatedAt", void 0);
exports.UserProtocolPositionSnapshotOperationToken = UserProtocolPositionSnapshotOperationToken = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_protocol_position_snapshot_operation_tokens' }),
    (0, typeorm_1.Index)(['tokenAddress', 'userProtocolPositionSnapshotOperationId', 'tokenDirection', 'tag'], { unique: true })
], UserProtocolPositionSnapshotOperationToken);
//# sourceMappingURL=userProtocolPositionSnapshotOperationToken.entity.js.map