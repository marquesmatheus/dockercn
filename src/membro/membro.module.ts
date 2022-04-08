import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MembroController } from './membro.controller';
import { membroProviders } from './membro.providers';
import { MembroService } from './membro.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MembroController],
  providers: [...membroProviders, MembroService],
})
export class MembroModule {}
