import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StatusProfissao } from './status-profissao.entity';

@Injectable()
export class StatusProfissaoService {
  constructor(
    @Inject('STATUS_PROFISSAO_REPOSITORY')
    private statusProfissaoRepository: Repository<StatusProfissao>,
  ) {}

  getinstance(): Repository<StatusProfissao> {
    return this.statusProfissaoRepository;
  }
}
