import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CnhController } from './cnh.controller';
import { cnhProviders } from './cnh.providers';
import { CnhService } from './cnh.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CnhController],
  providers: [...cnhProviders, CnhService],
})
export class CnhModule {}
