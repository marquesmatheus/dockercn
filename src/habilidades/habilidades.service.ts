import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Habilidades } from './habilidades.entity';

@Injectable()
export class HabilidadesService {
  constructor(
    @Inject('HABILIDADES_REPOSITORY')
    private habilidadesRepository: Repository<Habilidades>,
  ) {}

  getinstance(): Repository<Habilidades> {
    return this.habilidadesRepository;
  }
}
