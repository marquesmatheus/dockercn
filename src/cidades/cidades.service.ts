import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cidades } from './cidades.entity';

@Injectable()
export class CidadesService {
  constructor(
    @Inject('CIDADES_REPOSITORY')
    private cidadesRepository: Repository<Cidades>,
  ) {}

  getinstance(): Repository<Cidades> {
    return this.cidadesRepository;
  }

  async getInfo() {
    return await this.cidadesRepository
      .createQueryBuilder('cidades')
      .innerJoinAndSelect('cidades.doEstado', 'estados')
      .innerJoinAndSelect('estados.doPais', 'paises')
      .getMany();
  }

  async getInfoById(id: number) {
    return await this.cidadesRepository
      .createQueryBuilder('cidades')
      .innerJoinAndSelect('cidades.doEstado', 'estados')
      .innerJoinAndSelect('estados.doPais', 'paises')
      .where('cidades.id = :id', { id: id })
      .getOne();
  }

  async getCidadesDoEstado(id: number) {
    return await this.cidadesRepository.find({ doEstado: id });
  }
}
