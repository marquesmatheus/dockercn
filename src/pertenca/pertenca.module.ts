import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PertencaController } from './pertenca.controller';
import { pertencaProviders } from './pertenca.providers';
import { PertencaService } from './pertenca.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PertencaController],
  providers: [...pertencaProviders, PertencaService],
})
export class PertencaModule {}
