import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Profissoes } from './profissoes.entity';

@Injectable()
export class ProfissoesService {
  constructor(
    @Inject('PROFISSOES_REPOSITORY')
    private profissoesRepository: Repository<Profissoes>,
  ) {}

  getinstance(): Repository<Profissoes> {
    return this.profissoesRepository;
  }
}
