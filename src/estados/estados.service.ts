import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Estados } from './estados.entity';

@Injectable()
export class EstadosService {
  constructor(
    @Inject('ESTADOS_REPOSITORY')
    private estadosRepository: Repository<Estados>,
  ) {}

  getinstance(): Repository<Estados> {
    return this.estadosRepository;
  }

  async getInfo() {
    return await this.estadosRepository
      .createQueryBuilder('estados')
      .innerJoinAndSelect('estados.doPais', 'paises')
      .getMany();
  }

  async getInfoById(id: number) {
    return await this.estadosRepository
      .createQueryBuilder('estados')
      .innerJoinAndSelect('estados.doPais', 'paises')
      .where('estados.id = :id', { id: id })
      .getOne();
  }

  async getEstadosDoPais(id: number) {
    return await this.estadosRepository.find({ doPais: id });
  }
}
