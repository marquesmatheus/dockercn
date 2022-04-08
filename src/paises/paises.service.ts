import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Paises } from './paises.entity';

@Injectable()
export class PaisesService {
  constructor(
    @Inject('PAISES_REPOSITORY')
    private paisesRepository: Repository<Paises>,
  ) {}

  getinstance(): Repository<Paises> {
    return this.paisesRepository;
  }

  async get(): Promise<Paises[]> {
    return this.paisesRepository.find();
  }
}
