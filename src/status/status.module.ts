import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StatusController } from './status.controller';
import { statusProviders } from './status.providers';
import { StatusService } from './status.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [...statusProviders, StatusService],
})
export class StatusModule {}
