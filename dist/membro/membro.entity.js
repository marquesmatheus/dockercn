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
exports.Membro = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const status_entity_1 = require("../status/status.entity");
const estado_civil_entity_1 = require("../estado-civil/estado-civil.entity");
const cidades_entity_1 = require("../cidades/cidades.entity");
const cnh_entity_1 = require("../cnh/cnh.entity");
const grau_instrucao_entity_1 = require("../grau-instrucao/grau-instrucao.entity");
const profissoes_entity_1 = require("../profissoes/profissoes.entity");
const paises_entity_1 = require("../paises/paises.entity");
const afastamento_temporario_entity_1 = require("../afastamento-temporario/afastamento-temporario.entity");
const modo_compromisso_entity_1 = require("../modo-compromisso/modo-compromisso.entity");
const pertenca_entity_1 = require("../pertenca/pertenca.entity");
const grau_pertenca_entity_1 = require("../grau-pertenca/grau-pertenca.entity");
const frente_missao_entity_1 = require("../frente-missao/frente-missao.entity");
let Membro = class Membro {
    init(body) {
        console.log(body.estadoCivil);
        this.id = body.id;
        this.rc = body.rc;
        this.nomeCompleto = body.nomeCompleto;
        this.nome = body.nome;
        this.sobrenome = body.sobrenome;
        this.apelido = body.apelido;
        this.nomePai = body.nomePai;
        this.nomeMae = body.nomeMae;
        this.enderecoResidencia = body.enderecoResidencia;
        this.telFixo = body.telFixo;
        this.celular = body.celular;
        this.emailComunitario = body.emailComunitario;
        this.rg = body.rg;
        this.cpf = body.cpf;
        this.dataNascimento = body.dataNascimento;
        this.dataFalecimento = body.dataFalecimento;
        this.idade = body.idade;
        this.numeroPassaporte = body.numeroPassaporte;
        this.anoEntrada = body.anoEntrada;
        this.dataEntrada = body.dataEntrada;
        this.tempoComunidade = body.tempoComunidade;
        this.dataDesligamento = body.dataDesligamento;
        this.anoDesligamento = body.anoDesligamento;
        this.docDesligamento = body.docDesligamento;
        this.chegadaMissaoAtual = body.chegadaMissaoAtual;
        this.tempoMissaoAtualMeses = body.tempoMissaoAtualMeses;
        this.tempoMissaoAtualAnos = body.tempoMissaoAtualAnos;
        this.situacaoFrenteMissaoAtual = body.situacaoFrenteMissaoAtual;
        this.dataIngressoJuniorato = body.dataIngressoJuniorato;
        this.dataIngressoTemporario = body.dataIngressoTemporario;
        this.dataIngressoDefinitivo = body.dataIngressoDefinitivo;
        this.dataCompromissoDefinitivo = body.dataCompromissoDefinitivo;
        this.status = body.status;
        this.titulo = body.titulo;
        this.sexo = body.sexo;
        this.estadoCivil = body.estadoCivil;
        this.estadoCanonico = body.estadoCanonico;
        this.estadoCondicaoDeVida = body.estadoCondicaoDeVida;
        this.etapaCondicaoDeVida = body.etapaCondicaoDeVida;
        this.cidadeResidencia = body.cidadeResidencia;
        this.habilitacao = body.habilitacao;
        this.grauInstrucao = body.grauInstrucao;
        this.profissao = body.profissao;
        this.grupoEtario = body.grupoEtario;
        this.localNascimento = body.localNascimento;
        this.nacionalidade = body.nacionalidade;
        this.pais = body.pais;
        this.afastamentoTemporario = body.afastamentoTemporario;
        this.modoCompromisso = body.modoCompromisso;
        this.pertenca = body.pertenca;
        this.grauPertenca = body.grauPertenca;
        this.frenteMissao = body.frenteMissao;
        this.residenciaComunitaria = body.residenciaComunitaria;
        return this;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    (0, class_validator_1.ValidateIf)((c) => !!c.id),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "rc", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "nomeCompleto", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "apelido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "nomePai", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "nomeMae", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "enderecoResidencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "telFixo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "celular", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "emailComunitario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "rg", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataFalecimento", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "numeroPassaporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Membro.prototype, "anoEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataEntrada", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "tempoComunidade", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataDesligamento", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "anoDesligamento", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "docDesligamento", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "chegadaMissaoAtual", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "tempoMissaoAtualMeses", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "tempoMissaoAtualAnos", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "situacaoFrenteMissaoAtual", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataIngressoJuniorato", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataIngressoTemporario", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataIngressoDefinitivo", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], Membro.prototype, "dataCompromissoDefinitivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entity_1.Status, (status) => status.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { nullable: true }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_civil_entity_1.EstadoCivil, (estadoCivil) => estadoCivil.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "estadoCivil", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_civil_entity_1.EstadoCivil, (estadoCivil) => estadoCivil.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "estadoCanonico", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_civil_entity_1.EstadoCivil, (estadoCivil) => estadoCivil.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "estadoCondicaoDeVida", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_civil_entity_1.EstadoCivil, (estadoCivil) => estadoCivil.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "etapaCondicaoDeVida", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidades_entity_1.Cidades, (cidades) => cidades.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "cidadeResidencia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cnh_entity_1.Cnh, (cnh) => cnh.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "habilitacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grau_instrucao_entity_1.GrauInstrucao, (grauInstrucao) => grauInstrucao.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "grauInstrucao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profissoes_entity_1.Profissoes, (profissoes) => profissoes.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "profissao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "grupoEtario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidades_entity_1.Cidades, (cidades) => cidades.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "localNascimento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paises_entity_1.Paises, (paises) => paises.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "nacionalidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paises_entity_1.Paises, (paises) => paises.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => afastamento_temporario_entity_1.AfastamentoTemporario, (afastamentoTemporario) => afastamentoTemporario.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "afastamentoTemporario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => modo_compromisso_entity_1.ModoCompromisso, (modoCompromisso) => modoCompromisso.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "modoCompromisso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pertenca_entity_1.Pertenca, (pertenca) => pertenca.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "pertenca", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grau_pertenca_entity_1.GrauPertenca, (grauPertenca) => grauPertenca.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "grauPertenca", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => frente_missao_entity_1.FrenteMissao, (frenteMissao) => frenteMissao.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Number)
], Membro.prototype, "frenteMissao", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Membro.prototype, "residenciaComunitaria", void 0);
Membro = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['rc'])
], Membro);
exports.Membro = Membro;
//# sourceMappingURL=membro.entity.js.map