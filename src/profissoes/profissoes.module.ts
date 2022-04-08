import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfissoesController } from './profissoes.controller';
import { profissoesProviders } from './profissoes.providers';
import { ProfissoesService } from './profissoes.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfissoesController],
  providers: [...profissoesProviders, ProfissoesService],
})
export class ProfissoesModule {}
