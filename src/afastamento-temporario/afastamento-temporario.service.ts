import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AfastamentoTemporario } from './afastamento-temporario.entity';

@Injectable()
export class AfastamentoTemporarioService {
  constructor(
    @Inject('AFASTAMENTO_TEMPORARIO_REPOSITORY')
    private afastamentoTemporarioRepository: Repository<AfastamentoTemporario>,
  ) {}

  getinstance(): Repository<AfastamentoTemporario> {
    return this.afastamentoTemporarioRepository;
  }
}
