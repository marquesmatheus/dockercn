import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Membro } from './membro.entity';

@Injectable()
export class MembroService {
  constructor(
    @Inject('MEMBRO_REPOSITORY')
    private membroRepository: Repository<Membro>,
  ) {}

  getinstance(): Repository<Membro> {
    return this.membroRepository;
  }

  async getInfo() {
    let data = await this.membroRepository
      .createQueryBuilder('membro')
      .innerJoinAndSelect('membro.status', 'status')
      // .innerJoinAndSelect('membro.titulo', 'titulo')
      // .innerJoinAndSelect('membro.sexo', 'sexo')
      .leftJoinAndSelect('membro.estadoCivil', 'estadoCivil')
      // .innerJoinAndSelect('membro.estadoCanonico', 'estadoCivil')
      // .innerJoinAndSelect('membro.estadoCondicaoDeVida', 'estadoCivil')
      // .innerJoinAndSelect('membro.etapaCondicaoDeVida', 'estadoCivil')
      // .innerJoinAndSelect('membro.cidadeResidencia', 'cidades')
      .innerJoinAndSelect('membro.grauInstrucao', 'grauInstrucao')
      .innerJoinAndSelect('membro.profissao', 'profissoes')
      // .innerJoinAndSelect('membro.grupoEtario', 'grupoEtario')
      // .innerJoinAndSelect('membro.localNascimento', 'cidades')
      .innerJoinAndSelect('membro.nacionalidade', 'paises')
      // .innerJoinAndSelect('membro.pais', 'paises')
      .innerJoinAndSelect(
        'membro.afastamentoTemporario',
        'afastamentoTemporario',
      )
      .innerJoinAndSelect('membro.modoCompromisso', 'modoCompromisso')
      .innerJoinAndSelect('membro.pertenca', 'pertenca')
      .innerJoinAndSelect('membro.grauPertenca', 'grauPertenca')
      .innerJoinAndSelect('membro.frenteMissao', 'frenteMissao');
    // .innerJoinAndSelect(
    //   'membro.residenciaComunitaria',
    //   'residenciaComunitaria',
    // )
    // .getMany();

    console.log(data.getSql());

    return data.getMany();
  }
}
