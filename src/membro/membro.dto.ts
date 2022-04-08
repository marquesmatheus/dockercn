import { Type } from '@nestjs/common';

export interface MembroDTO {
  //
  // === INTERNO ===
  id: number;
  rc: number;
  nomeCompleto: string;
  nome: string;
  sobrenome: string;
  apelido?: string;
  nomePai: string;
  nomeMae: string;

  // --- CONTATO ---
  enderecoResidencia: string;
  telFixo?: string;
  celular?: string;
  emailComunitario: string;

  // --- DOCUMENTOS ---
  rg: string;
  cpf: string;
  dataNascimento: Date;
  dataFalecimento?: Date;
  idade: number;
  numeroPassaporte?: number;
  // validadePassaporte?: Type;
  // foto: Type;

  // --- COMUNIDADE ---
  anoEntrada: string; // String? Não seria Date?
  dataEntrada: Date; // De novo?
  tempoComunidade: number;
  dataDesligamento?: Date; //   v
  anoDesligamento?: Date; // De novo?
  docDesligamento?: number;
  chegadaMissaoAtual: Date;
  tempoMissaoAtualMeses: number;
  tempoMissaoAtualAnos: number;
  situacaoFrenteMissaoAtual: number;
  dataIngressoJuniorato?: Date;
  dataIngressoTemporario?: Date;
  dataIngressoDefinitivo?: Date;
  dataCompromissoDefinitivo?: Date;
  // tempoCompromissoDefinitivo?: Type;

  // === RELATIONS ===
  status: number;
  titulo?: number;
  sexo: number;
  estadoCivil: number;
  estadoCanonico: number;
  estadoCondicaoDeVida: number;
  etapaCondicaoDeVida: number;
  cidadeResidencia: number;

  // --- DOCUMENTOS ---
  habilitacao?: number;
  grauInstrucao: number;
  profissao: number;
  grupoEtario: number;
  // piramideEtaria: number; // ???
  localNascimento: number; // ??? Cidade Natal?
  nacionalidade: number;
  pais: number;

  // --- COMUNIDADE ---
  afastamentoTemporario?: number;
  modoCompromisso: number;
  pertenca: number;
  grauPertenca: number;
  frenteMissao: number;
  residenciaComunitaria: number;
}
