import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InstituicaoAtuacao } from './instituicao-missionaria.entity';

@Injectable()
export class InstituicaoAtuacaoService {
  constructor(
    @Inject('INSTITUICAO_ATUACAO_REPOSITORY')
    private instituicaoAtuacaoRepository: Repository<InstituicaoAtuacao>,
  ) {}

  getinstance(): Repository<InstituicaoAtuacao> {
    return this.instituicaoAtuacaoRepository;
  }
}
