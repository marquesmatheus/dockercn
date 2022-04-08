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
exports.EstadosController = void 0;
const common_1 = require("@nestjs/common");
const estados_entity_1 = require("./estados.entity");
const estados_service_1 = require("./estados.service");
const generic_service_1 = require("../generic.service");
let EstadosController = class EstadosController {
    constructor(estadosService) {
        this.estadosService = estadosService;
        this.genericService = new generic_service_1.GenericService(this.estadosService.getinstance());
    }
    async get() {
        return await this.genericService.get();
    }
    async getInfo() {
        return await this.estadosService.getInfo();
    }
    async getById(id) {
        return await this.genericService.getById([id]);
    }
    async getInfoById(id) {
        return await this.estadosService.getInfoById(id);
    }
    async getEstadosDoPais(id) {
        return await this.estadosService.getEstadosDoPais(id);
    }
    async post(body) {
        return await this.genericService.post(new estados_entity_1.Estados().init(body));
    }
    async put(body) {
        let estado = new estados_entity_1.Estados().init(body);
        return await this.genericService.put(estado.id, estado);
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
], EstadosController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getInfo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/:id/info'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getInfoById", null);
__decorate([
    (0, common_1.Get)('/do-pais/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "getEstadosDoPais", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "delete", null);
EstadosController = __decorate([
    (0, common_1.Controller)('estados'),
    __metadata("design:paramtypes", [estados_service_1.EstadosService])
], EstadosController);
exports.EstadosController = EstadosController;
//# sourceMappingURL=estados.controller.js.map