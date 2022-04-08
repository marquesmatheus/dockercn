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
exports.MembroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let MembroService = class MembroService {
    constructor(membroRepository) {
        this.membroRepository = membroRepository;
    }
    getinstance() {
        return this.membroRepository;
    }
    async getInfo() {
        let data = await this.membroRepository
            .createQueryBuilder('membro')
            .innerJoinAndSelect('membro.status', 'status')
            .leftJoinAndSelect('membro.estadoCivil', 'estadoCivil')
            .innerJoinAndSelect('membro.grauInstrucao', 'grauInstrucao')
            .innerJoinAndSelect('membro.profissao', 'profissoes')
            .innerJoinAndSelect('membro.nacionalidade', 'paises')
            .innerJoinAndSelect('membro.afastamentoTemporario', 'afastamentoTemporario')
            .innerJoinAndSelect('membro.modoCompromisso', 'modoCompromisso')
            .innerJoinAndSelect('membro.pertenca', 'pertenca')
            .innerJoinAndSelect('membro.grauPertenca', 'grauPertenca')
            .innerJoinAndSelect('membro.frenteMissao', 'frenteMissao');
        console.log(data.getSql());
        return data.getMany();
    }
};
MembroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MEMBRO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MembroService);
exports.MembroService = MembroService;
//# sourceMappingURL=membro.service.js.map