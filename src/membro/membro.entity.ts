import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { MembroDTO } from './membro.dto';
import { IsDateString, IsInt, IsString, ValidateIf } from 'class-validator';
import { Status } from 'src/status/status.entity';
import { EstadoCivil } from 'src/estado-civil/estado-civil.entity';
import { Cidades } from 'src/cidades/cidades.entity';
import { Cnh } from 'src/cnh/cnh.entity';
import { GrauInstrucao } from 'src/grau-instrucao/grau-instrucao.entity';
import { Profissoes } from 'src/profissoes/profissoes.entity';
import { Paises } from 'src/paises/paises.entity';
import { AfastamentoTemporario } from 'src/afastamento-temporario/afastamento-temporario.entity';
import { ModoCompromisso } from 'src/modo-compromisso/modo-compromisso.entity';
import { Pertenca } from 'src/pertenca/pertenca.entity';
import { GrauPertenca } from 'src/grau-pertenca/grau-pertenca.entity';
import { FrenteMissao } from 'src/frente-missao/frente-missao.entity';

@Entity()
@Unique(['rc'])
export class Membro {
  //
  // === INTERNO ===

  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column('int')
  @IsInt()
  rc: number;

  @Column({ length: 100 })
  @IsString()
  nomeCompleto: string;

  @Column({ length: 100 })
  @IsString()
  nome: string;

  @Column({ length: 100 })
  @IsString()
  sobrenome: string;

  @Column({ length: 100, nullable: true })
  @IsString()
  apelido: string;

  @Column({ length: 100 })
  @IsString()
  nomePai: string;

  @Column({ length: 100 })
  @IsString()
  nomeMae: string;

  // --- CONTATO ---

  @Column({ length: 100 })
  @IsString()
  enderecoResidencia: string;

  @Column({ length: 20, nullable: true })
  @IsString()
  telFixo: string;

  @Column({ length: 100 })
  @IsString()
  celular: string;

  @Column({ length: 100 })
  @IsString()
  emailComunitario: string;

  // --- DOCUMENTOS ---

  @Column({ length: 100 })
  @IsString()
  rg: string;

  @Column({ length: 100 })
  @IsString()
  cpf: string;

  @Column('date')
  @IsDateString()
  dataNascimento: Date;

  @Column('date', { nullable: true })
  @IsDateString()
  dataFalecimento: Date;

  @Column('int')
  @IsInt()
  idade: number;

  @Column('int', { nullable: true })
  @IsInt()
  numeroPassaporte: number;

  // @Column('Type') // Precisar ser nullable
  // validadePassaporte: Type;

  // @Column('Type')
  // foto: Type;

  // --- COMUNIDADE ---

  @Column({ length: 100 })
  @IsString()
  anoEntrada: string;

  @Column('date')
  @IsDateString()
  dataEntrada: Date;

  @Column('int')
  @IsInt()
  tempoComunidade: number;

  @Column('date', { nullable: true })
  @IsDateString()
  dataDesligamento: Date;

  @Column('date', { nullable: true })
  @IsDateString()
  anoDesligamento: Date;

  @Column('int', { nullable: true })
  @IsInt()
  docDesligamento: number;

  @Column('date')
  @IsDateString()
  chegadaMissaoAtual: Date;

  @Column('int')
  @IsInt()
  tempoMissaoAtualMeses: number;

  @Column('int')
  @IsInt()
  tempoMissaoAtualAnos: number;

  @Column('int')
  @IsInt()
  situacaoFrenteMissaoAtual: number;

  @Column('date', { nullable: true })
  @IsDateString()
  dataIngressoJuniorato: Date;

  @Column('date', { nullable: true })
  @IsDateString()
  dataIngressoTemporario: Date;

  @Column('date', { nullable: true })
  @IsDateString()
  dataIngressoDefinitivo: Date;

  @Column('date', { nullable: true })
  @IsDateString()
  dataCompromissoDefinitivo: Date;

  // @Column('Type') // Deveria ser nullable, mas acusa erro.
  // tempoCompromissoDefinitivo: Type;

  //
  // === RELAÇÕES ===
  //

  @ManyToOne(() => Status, (status) => status.id)
  @JoinColumn()
  status: number;

  // @ManyToOne(() => Titulo, (titulo) => titulo.id)
  // @JoinColumn()
  @Column('int', { nullable: true })
  @IsInt()
  titulo: number;

  // Não poderia ser um booleano?
  // @ManyToOne(() => Sexo, (sexo) => sexo.id)
  // @JoinColumn()
  @Column('int')
  @IsInt()
  sexo: number;

  // ---------------- Essas quatro colunas puxam os mesmos dados! -----------------
  @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.id)
  @JoinColumn()
  estadoCivil: number;

  @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.id)
  @JoinColumn()
  estadoCanonico: number;

  @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.id)
  @JoinColumn()
  estadoCondicaoDeVida: number;

  @ManyToOne(() => EstadoCivil, (estadoCivil) => estadoCivil.id)
  @JoinColumn()
  etapaCondicaoDeVida: number;
  // -----------------------------------------------------------------------------

  @ManyToOne(() => Cidades, (cidades) => cidades.id)
  @JoinColumn()
  cidadeResidencia: number;

  // --- DOCUMENTOS ---

  @ManyToOne(() => Cnh, (cnh) => cnh.id)
  @JoinColumn()
  habilitacao: number;

  @ManyToOne(() => GrauInstrucao, (grauInstrucao) => grauInstrucao.id)
  @JoinColumn()
  grauInstrucao: number;

  @ManyToOne(() => Profissoes, (profissoes) => profissoes.id)
  @JoinColumn()
  profissao: number;

  // ----------------- Essas duas colunas puxam os mesmos dados ------------------
  // @ManyToOne(() => GrupoEtario, (grupoEtario) => grupoEtario.id)
  // @JoinColumn()
  @Column('int')
  @IsInt()
  grupoEtario: number;

  // O que é isso? Não seria um gráfico?
  // @Column('int')
  // @IsInt()
  // piramideEtaria: number;
  // -----------------------------------------------------------------------------

  @ManyToOne(() => Cidades, (cidades) => cidades.id)
  @JoinColumn()
  localNascimento: number;

  // Tem que ser "brasileiro"? Não pode colocar só "brasil".
  @ManyToOne(() => Paises, (paises) => paises.id)
  @JoinColumn()
  nacionalidade: number;

  @ManyToOne(() => Paises, (paises) => paises.id)
  @JoinColumn()
  pais: number;

  // --- COMUNIDADE ---

  @ManyToOne(
    () => AfastamentoTemporario,
    (afastamentoTemporario) => afastamentoTemporario.id,
  )
  @JoinColumn()
  afastamentoTemporario: number;

  @ManyToOne(() => ModoCompromisso, (modoCompromisso) => modoCompromisso.id)
  @JoinColumn()
  modoCompromisso: number;

  @ManyToOne(() => Pertenca, (pertenca) => pertenca.id)
  @JoinColumn()
  pertenca: number;

  @ManyToOne(() => GrauPertenca, (grauPertenca) => grauPertenca.id)
  @JoinColumn()
  grauPertenca: number;

  @ManyToOne(() => FrenteMissao, (frenteMissao) => frenteMissao.id)
  @JoinColumn()
  frenteMissao: number;

  // @ManyToOne(
  //   () => ResidenciaComunitaria,
  //   (residenciaComunitaria) => residenciaComunitaria.id,
  // )
  @Column('int')
  @IsInt()
  residenciaComunitaria: number;

  init(body: MembroDTO): Membro {
    //
    // === INTERNO ===
    console.log(body.estadoCivil);

    this.id = body.id;
    this.rc = body.rc;
    this.nomeCompleto = body.nomeCompleto;
    this.nome = body.nome;
    this.sobrenome = body.sobrenome;
    this.apelido = body.apelido;
    this.nomePai = body.nomePai;
    this.nomeMae = body.nomeMae;

    // --- CONTATO ---
    this.enderecoResidencia = body.enderecoResidencia;
    this.telFixo = body.telFixo;
    this.celular = body.celular;
    this.emailComunitario = body.emailComunitario;

    // --- DOCUMENTOS ---
    this.rg = body.rg;
    this.cpf = body.cpf;
    this.dataNascimento = body.dataNascimento;
    this.dataFalecimento = body.dataFalecimento;
    this.idade = body.idade;
    this.numeroPassaporte = body.numeroPassaporte;
    // this.validadePassaporte = body.validadePassaporte;
    // this.foto = body.foto;

    // --- COMUNIDADE ---
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
    // this.tempoCompromissoDefinitivo = body.tempoCompromissoDefinitivo;

    // === RELAÇÕES ===

    this.status = body.status;
    this.titulo = body.titulo;
    this.sexo = body.sexo;
    this.estadoCivil = body.estadoCivil;
    this.estadoCanonico = body.estadoCanonico;
    this.estadoCondicaoDeVida = body.estadoCondicaoDeVida;
    this.etapaCondicaoDeVida = body.etapaCondicaoDeVida;
    this.cidadeResidencia = body.cidadeResidencia;

    // --- DOCUMENTOS ---
    this.habilitacao = body.habilitacao;
    this.grauInstrucao = body.grauInstrucao;
    this.profissao = body.profissao;
    this.grupoEtario = body.grupoEtario;
    // this.piramideEtaria = body.piramideEtaria;
    this.localNascimento = body.localNascimento;
    this.nacionalidade = body.nacionalidade;
    this.pais = body.pais;

    // --- COMUNIDADE ---
    this.afastamentoTemporario = body.afastamentoTemporario;
    this.modoCompromisso = body.modoCompromisso;
    this.pertenca = body.pertenca;
    this.grauPertenca = body.grauPertenca;
    this.frenteMissao = body.frenteMissao;
    this.residenciaComunitaria = body.residenciaComunitaria;

    return this;
  }
}
