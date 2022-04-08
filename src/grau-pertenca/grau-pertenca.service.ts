import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GrauPertenca } from './grau-pertenca.entity';

@Injectable()
export class GrauPertencaService {
  constructor(
    @Inject('GRAU_PERTENCA_REPOSITORY')
    private grauPertencaRepository: Repository<GrauPertenca>,
  ) {}

  getinstance(): Repository<GrauPertenca> {
    return this.grauPertencaRepository;
  }
}
