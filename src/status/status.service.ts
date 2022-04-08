import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
  constructor(
    @Inject('STATUS_REPOSITORY')
    private statusRepository: Repository<Status>,
  ) {}

  getinstance(): Repository<Status> {
    return this.statusRepository;
  }
}
