import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FrenteMissao } from './frente-missao.entity';

@Injectable()
export class FrenteMissaoService {
  constructor(
    @Inject('FRENTE_MISSAO_REPOSITORY')
    private frenteMissaoRepository: Repository<FrenteMissao>,
  ) {}

  getinstance(): Repository<FrenteMissao> {
    return this.frenteMissaoRepository;
  }
}
