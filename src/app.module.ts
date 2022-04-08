import { Module } from '@nestjs/common';
import { AfastamentoTemporarioModule } from './afastamento-temporario/afastamento-temporario.module';
import { CargosConselhoModule } from './cargos-conselho/cargos-conselho.module';
import { CidadesModule } from './cidades/cidades.module';
import { CnhModule } from './cnh/cnh.module';
import { CursandoModule } from './cursando/cursando.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { EstadoCivilModule } from './estado-civil/estado-civil.module';
import { EstadosModule } from './estados/estados.module';
import { FrenteMissaoModule } from './frente-missao/frente-missao.module';
import { GovernoLocalModule } from './governo-local/governo-local.module';
import { GrauInstrucaoModule } from './grau-instrucao/grau-instrucao.module';
import { GrauPertencaModule } from './grau-pertenca/grau-pertenca.module';
import { HabilidadesModule } from './habilidades/habilidades.module';
import { InstituicaoAtuacaoModule } from './instituicao-missionaria/instituicao-missionaria.module';
import { InstituicaoEnsinoModule } from './instituicao-ensino/instituicao-ensino.module';
import { MembroModule } from './membro/membro.module';
import { ModoCompromissoModule } from './modo-compromisso/modo-compromisso.module';
import { MotivoDesligamentoModule } from './motivo-desligamento/motivo-desligamento.module';
import { PaisesModule } from './paises/paises.module';
import { PertencaModule } from './pertenca/pertenca.module';
import { ProfissoesModule } from './profissoes/profissoes.module';
import { RegimeProfissionalModule } from './regime-profissional/regime-profissional.module';
import { StatusProfissaoModule } from './status-profissao/status-profissao.module';
import { StatusModule } from './status/status.module';
import { ValidadePassaporteModule } from './validade-passaporte/validade-passaporte.module';

@Module({
  imports: [
    MembroModule,
    AfastamentoTemporarioModule,
    CargosConselhoModule,
    CnhModule,
    CursandoModule,
    EstadoCivilModule,
    DepartamentoModule,
    GovernoLocalModule,
    GrauInstrucaoModule,
    GrauPertencaModule,
    HabilidadesModule,
    InstituicaoAtuacaoModule,
    InstituicaoEnsinoModule,
    ModoCompromissoModule,
    MotivoDesligamentoModule,
    FrenteMissaoModule,
    CidadesModule,
    EstadosModule,
    PaisesModule,
    PertencaModule,
    ProfissoesModule,
    RegimeProfissionalModule,
    StatusModule,
    StatusProfissaoModule,
    ValidadePassaporteModule,
  ],
})
export class AppModule {}
