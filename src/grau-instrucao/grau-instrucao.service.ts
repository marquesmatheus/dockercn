import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GrauInstrucao } from './grau-instrucao.entity';

@Injectable()
export class GrauInstrucaoService {
  constructor(
    @Inject('GRAU_INSTRUCAO_REPOSITORY')
    private grauInstrucaoRepository: Repository<GrauInstrucao>,
  ) {}

  getinstance(): Repository<GrauInstrucao> {
    return this.grauInstrucaoRepository;
  }
}
