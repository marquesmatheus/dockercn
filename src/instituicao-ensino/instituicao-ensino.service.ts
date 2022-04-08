import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InstituicaoEnsino } from './instituicao-ensino.entity';

@Injectable()
export class InstituicaoEnsinoService {
  constructor(
    @Inject('INSTITUICAO_ENSINO_REPOSITORY')
    private instituicaoEnsinoRepository: Repository<InstituicaoEnsino>,
  ) {}

  getinstance(): Repository<InstituicaoEnsino> {
    return this.instituicaoEnsinoRepository;
  }
}
