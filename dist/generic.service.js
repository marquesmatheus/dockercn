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
exports.GenericService = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let GenericService = class GenericService {
    constructor(genericRepository) {
        this.genericRepository = genericRepository;
    }
    async isValid(data) {
        const validations = await (0, class_validator_1.validate)(data).then((e) => e);
        console.log(validations);
        return validations.length === 0;
    }
    async get() {
        return this.genericRepository.find();
    }
    async getById(id) {
        return this.genericRepository.findByIds(id);
    }
    async post(body) {
        return (await this.isValid(body))
            ? await this.genericRepository
                .insert(body)
                .then((result) => {
                console.log(result);
                return { status: 'sucesso' };
            })
                .catch((erro) => {
                console.log(erro);
                return {
                    status: erro.driverError.errno === 1062 ? 'duplicado' : 'erro',
                };
            })
            : { status: 'dados invalidos' };
    }
    async put(id, body) {
        return (await this.isValid(body))
            ? await this.genericRepository
                .update(id, body)
                .then((result) => {
                return result.affected === 0
                    ? { status: 'sem efeito' }
                    : { status: 'sucesso' };
            })
                .catch((erro) => {
                console.log(erro);
                return { status: 'erro' };
            })
            : { status: 'dados invalidos' };
    }
    async delete(id) {
        return (await this.genericRepository.delete(id)).affected === 0
            ? { status: 'sem efeito' }
            : { status: 'sucesso' };
    }
};
GenericService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('GENERIC_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GenericService);
exports.GenericService = GenericService;
//# sourceMappingURL=generic.service.js.map