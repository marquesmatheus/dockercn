import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ModoCompromisso } from './modo-compromisso.entity';

@Injectable()
export class ModoCompromissoService {
  constructor(
    @Inject('MODO_COMPROMISSO_REPOSITORY')
    private modoCompromissoRepository: Repository<ModoCompromisso>,
  ) {}

  getinstance(): Repository<ModoCompromisso> {
    return this.modoCompromissoRepository;
  }
}
