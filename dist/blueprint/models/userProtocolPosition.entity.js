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
exports.UserProtocolPosition = void 0;
const models_1 = require("../models");
const typeorm_1 = require("typeorm");
let UserProtocolPosition = class UserProtocolPosition {
};
exports.UserProtocolPosition = UserProtocolPosition;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserProtocolPosition.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPosition.prototype, "blueprintId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPosition.prototype, "userIdentifier", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserProtocolPosition.prototype, "positionIdentifier", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], UserProtocolPosition.prototype, "chainId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => models_1.UserProtocolPositionSnapshot, (userProtocolPositionSnapshot) => userProtocolPositionSnapshot.userProtocolPosition, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Object)
], UserProtocolPosition.prototype, "userProtocolPositionSnapshots", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp without time zone' }),
    __metadata("design:type", Date)
], UserProtocolPosition.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp without time zone',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserProtocolPosition.prototype, "updatedAt", void 0);
exports.UserProtocolPosition = UserProtocolPosition = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_protocol_positions' }),
    (0, typeorm_1.Index)(['userIdentifier', 'positionIdentifier', 'chainId', 'blueprintId'], { unique: true }),
    (0, typeorm_1.Index)(['userIdentifier', 'positionIdentifier', 'blueprintId'], {}),
    (0, typeorm_1.Index)(['userIdentifier', 'blueprintId'], {})
], UserProtocolPosition);
//# sourceMappingURL=userProtocolPosition.entity.js.map