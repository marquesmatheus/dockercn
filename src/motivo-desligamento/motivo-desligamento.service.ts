import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MotivoDesligamento } from './motivo-desligamento.entity';

@Injectable()
export class MotivoDesligamentoService {
  constructor(
    @Inject('MOTIVO_DESLIGAMENTO_REPOSITORY')
    private motivoDesligamentoRepository: Repository<MotivoDesligamento>,
  ) {}

  getinstance(): Repository<MotivoDesligamento> {
    return this.motivoDesligamentoRepository;
  }
}
