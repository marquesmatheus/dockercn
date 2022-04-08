import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Departamento } from './departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(
    @Inject('DEPARTAMENTO_REPOSITORY')
    private departamentoRepository: Repository<Departamento>,
  ) {}

  getinstance(): Repository<Departamento> {
    return this.departamentoRepository;
  }
}
