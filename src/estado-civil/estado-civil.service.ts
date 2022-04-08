import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EstadoCivil } from './estado-civil.entity';

@Injectable()
export class EstadoCivilService {
  constructor(
    @Inject('ESTADO_CIVIL_REPOSITORY')
    private estadoCivilRepository: Repository<EstadoCivil>,
  ) {}

  getinstance(): Repository<EstadoCivil> {
    return this.estadoCivilRepository;
  }
}
