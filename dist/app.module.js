"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const afastamento_temporario_module_1 = require("./afastamento-temporario/afastamento-temporario.module");
const cargos_conselho_module_1 = require("./cargos-conselho/cargos-conselho.module");
const cidades_module_1 = require("./cidades/cidades.module");
const cnh_module_1 = require("./cnh/cnh.module");
const cursando_module_1 = require("./cursando/cursando.module");
const departamento_module_1 = require("./departamento/departamento.module");
const estado_civil_module_1 = require("./estado-civil/estado-civil.module");
const estados_module_1 = require("./estados/estados.module");
const frente_missao_module_1 = require("./frente-missao/frente-missao.module");
const governo_local_module_1 = require("./governo-local/governo-local.module");
const grau_instrucao_module_1 = require("./grau-instrucao/grau-instrucao.module");
const grau_pertenca_module_1 = require("./grau-pertenca/grau-pertenca.module");
const habilidades_module_1 = require("./habilidades/habilidades.module");
const instituicao_missionaria_module_1 = require("./instituicao-missionaria/instituicao-missionaria.module");
const instituicao_ensino_module_1 = require("./instituicao-ensino/instituicao-ensino.module");
const membro_module_1 = require("./membro/membro.module");
const modo_compromisso_module_1 = require("./modo-compromisso/modo-compromisso.module");
const motivo_desligamento_module_1 = require("./motivo-desligamento/motivo-desligamento.module");
const paises_module_1 = require("./paises/paises.module");
const pertenca_module_1 = require("./pertenca/pertenca.module");
const profissoes_module_1 = require("./profissoes/profissoes.module");
const regime_profissional_module_1 = require("./regime-profissional/regime-profissional.module");
const status_profissao_module_1 = require("./status-profissao/status-profissao.module");
const status_module_1 = require("./status/status.module");
const validade_passaporte_module_1 = require("./validade-passaporte/validade-passaporte.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            membro_module_1.MembroModule,
            afastamento_temporario_module_1.AfastamentoTemporarioModule,
            cargos_conselho_module_1.CargosConselhoModule,
            cnh_module_1.CnhModule,
            cursando_module_1.CursandoModule,
            estado_civil_module_1.EstadoCivilModule,
            departamento_module_1.DepartamentoModule,
            governo_local_module_1.GovernoLocalModule,
            grau_instrucao_module_1.GrauInstrucaoModule,
            grau_pertenca_module_1.GrauPertencaModule,
            habilidades_module_1.HabilidadesModule,
            instituicao_missionaria_module_1.InstituicaoAtuacaoModule,
            instituicao_ensino_module_1.InstituicaoEnsinoModule,
            modo_compromisso_module_1.ModoCompromissoModule,
            motivo_desligamento_module_1.MotivoDesligamentoModule,
            frente_missao_module_1.FrenteMissaoModule,
            cidades_module_1.CidadesModule,
            estados_module_1.EstadosModule,
            paises_module_1.PaisesModule,
            pertenca_module_1.PertencaModule,
            profissoes_module_1.ProfissoesModule,
            regime_profissional_module_1.RegimeProfissionalModule,
            status_module_1.StatusModule,
            status_profissao_module_1.StatusProfissaoModule,
            validade_passaporte_module_1.ValidadePassaporteModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map