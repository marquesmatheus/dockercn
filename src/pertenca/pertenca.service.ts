import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pertenca } from './pertenca.entity';

@Injectable()
export class PertencaService {
  constructor(
    @Inject('PERTENCA_REPOSITORY')
    private pertencaRepository: Repository<Pertenca>,
  ) {}

  getinstance(): Repository<Pertenca> {
    return this.pertencaRepository;
  }
}
