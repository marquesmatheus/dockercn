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
exports.CidadesController = void 0;
const common_1 = require("@nestjs/common");
const cidades_entity_1 = require("./cidades.entity");
const cidades_service_1 = require("./cidades.service");
const generic_service_1 = require("../generic.service");
let CidadesController = class CidadesController {
    constructor(cidadesService) {
        this.cidadesService = cidadesService;
        this.genericService = new generic_service_1.GenericService(this.cidadesService.getinstance());
    }
    async get() {
        return await this.genericService.get();
    }
    async getInfo() {
        return await this.cidadesService.getInfo();
    }
    async getById(id) {
        return await this.genericService.getById([id]);
    }
    async getInfoById(id) {
        return await this.cidadesService.getInfoById(id);
    }
    async getCidadesDoEstado(id) {
        return await this.cidadesService.getCidadesDoEstado(id);
    }
    async post(body) {
        return await this.genericService.post(new cidades_entity_1.Cidades().init(body));
    }
    async put(body) {
        let cidade = new cidades_entity_1.Cidades().init(body);
        return await this.genericService.put(cidade.id, cidade);
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
], CidadesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "getInfo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/:id/info'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "getInfoById", null);
__decorate([
    (0, common_1.Get)('/do-estado/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "getCidadesDoEstado", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "delete", null);
CidadesController = __decorate([
    (0, common_1.Controller)('cidades'),
    __metadata("design:paramtypes", [cidades_service_1.CidadesService])
], CidadesController);
exports.CidadesController = CidadesController;
//# sourceMappingURL=cidades.controller.js.map