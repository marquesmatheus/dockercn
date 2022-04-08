import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GovernoLocal } from './governo-local.entity';

@Injectable()
export class GovernoLocalService {
  constructor(
    @Inject('GOVERNO_LOCAL_REPOSITORY')
    private governoLocalRepository: Repository<GovernoLocal>,
  ) {}

  getinstance(): Repository<GovernoLocal> {
    return this.governoLocalRepository;
  }
}
