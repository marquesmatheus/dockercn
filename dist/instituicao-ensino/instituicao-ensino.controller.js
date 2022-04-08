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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituicaoEnsinoController = void 0;
const common_1 = require("@nestjs/common");
const instituicao_ensino_entity_1 = require("./instituicao-ensino.entity");
const instituicao_ensino_service_1 = require("./instituicao-ensino.service");
const generic_service_1 = require("../generic.service");
let InstituicaoEnsinoController = class InstituicaoEnsinoController {
    constructor(instituicaoEnsinoService) {
        this.instituicaoEnsinoService = instituicaoEnsinoService;
        this.genericService = new generic_service_1.GenericService(this.instituicaoEnsinoService.getinstance());
    }
    async get() {
        return await this.genericService.get();
    }
    async getById(id) {
        return await this.genericService.getById([id]);
    }
    async post(body) {
        return await this.genericService.post(new instituicao_ensino_entity_1.InstituicaoEnsino().init(body));
    }
    async put(body) {
        let instituicaoEnsino = new instituicao_ensino_entity_1.InstituicaoEnsino().init(body);
        return await this.genericService.put(instituicaoEnsino.id, instituicaoEnsino);
    }
    async delete(id) {
        return await this.genericService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstituicaoEnsinoController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstituicaoEnsinoController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstituicaoEnsinoController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstituicaoEnsinoController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InstituicaoEnsinoController.prototype, "delete", null);
InstituicaoEnsinoController = __decorate([
    (0, common_1.Controller)('instituicao-ensino'),
    __metadata("design:paramtypes", [instituicao_ensino_service_1.InstituicaoEnsinoService])
], InstituicaoEnsinoController);
exports.InstituicaoEnsinoController = InstituicaoEnsinoController;
//# sourceMappingURL=instituicao-ensino.controller.js.map