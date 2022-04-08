import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cursando } from './cursando.entity';

@Injectable()
export class CursandoService {
  constructor(
    @Inject('CURSANDO_REPOSITORY')
    private cursandoRepository: Repository<Cursando>,
  ) {}

  getinstance(): Repository<Cursando> {
    return this.cursandoRepository;
  }
}
