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
exports.FrenteMissao = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let FrenteMissao = class FrenteMissao {
    init(body) {
        this.id = body.id;
        this.missao = body.missao;
        this.idCidade = body.idCidade;
        return this;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, class_validator_1.ValidateIf)((c) => !!c.id),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FrenteMissao.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FrenteMissao.prototype, "missao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], FrenteMissao.prototype, "idCidade", void 0);
FrenteMissao = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['missao'])
], FrenteMissao);
exports.FrenteMissao = FrenteMissao;
//# sourceMappingURL=frente-missao.entity.js.map