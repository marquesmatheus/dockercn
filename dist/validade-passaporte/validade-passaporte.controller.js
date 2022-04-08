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
exports.ValidadePassaporteController = void 0;
const common_1 = require("@nestjs/common");
const validade_passaporte_entity_1 = require("./validade-passaporte.entity");
const validade_passaporte_service_1 = require("./validade-passaporte.service");
const generic_service_1 = require("../generic.service");
let ValidadePassaporteController = class ValidadePassaporteController {
    constructor(validadePassaporteService) {
        this.validadePassaporteService = validadePassaporteService;
        this.genericService = new generic_service_1.GenericService(this.validadePassaporteService.getinstance());
    }
    async get() {
        return await this.genericService.get();
    }
    async getById(id) {
        return await this.genericService.getById([id]);
    }
    async post(body) {
        return await this.genericService.post(new validade_passaporte_entity_1.ValidadePassaporte().init(body));
    }
    async put(body) {
        let validadePassaporte = new validade_passaporte_entity_1.ValidadePassaporte().init(body);
        return await this.genericService.put(validadePassaporte.id, validadePassaporte);
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
], ValidadePassaporteController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidadePassaporteController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ValidadePassaporteController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ValidadePassaporteController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ValidadePassaporteController.prototype, "delete", null);
ValidadePassaporteController = __decorate([
    (0, common_1.Controller)('validade-passaporte'),
    __metadata("design:paramtypes", [validade_passaporte_service_1.ValidadePassaporteService])
], ValidadePassaporteController);
exports.ValidadePassaporteController = ValidadePassaporteController;
//# sourceMappingURL=validade-passaporte.controller.js.map