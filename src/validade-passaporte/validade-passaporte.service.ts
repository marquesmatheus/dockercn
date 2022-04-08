import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ValidadePassaporte } from './validade-passaporte.entity';

@Injectable()
export class ValidadePassaporteService {
  constructor(
    @Inject('VALIDADE_PASSAPORTE_REPOSITORY')
    private validadePassaporteRepository: Repository<ValidadePassaporte>,
  ) {}

  getinstance(): Repository<ValidadePassaporte> {
    return this.validadePassaporteRepository;
  }
}
