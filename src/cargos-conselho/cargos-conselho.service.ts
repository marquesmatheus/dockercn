import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CargosConselho } from './cargos-conselho.entity';

@Injectable()
export class CargosConselhoService {
  constructor(
    @Inject('CARGOS_CONSELHO_REPOSITORY')
    private cargosConselhoRepository: Repository<CargosConselho>,
  ) {}

  getinstance(): Repository<CargosConselho> {
    return this.cargosConselhoRepository;
  }
}
