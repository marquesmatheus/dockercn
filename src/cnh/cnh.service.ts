import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cnh } from './cnh.entity';

@Injectable()
export class CnhService {
  constructor(
    @Inject('CNH_REPOSITORY')
    private cnhRepository: Repository<Cnh>,
  ) {}

  getinstance(): Repository<Cnh> {
    return this.cnhRepository;
  }
}
