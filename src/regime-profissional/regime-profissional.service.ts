import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegimeProfissional } from './regime-profissional.entity';

@Injectable()
export class RegimeProfissionalService {
  constructor(
    @Inject('REGIME_PROFISSIONAL_REPOSITORY')
    private regimeProfissionalRepository: Repository<RegimeProfissional>,
  ) {}

  getinstance(): Repository<RegimeProfissional> {
    return this.regimeProfissionalRepository;
  }
}
