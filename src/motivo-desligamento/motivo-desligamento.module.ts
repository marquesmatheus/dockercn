import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { MotivoDesligamentoController } from './motivo-desligamento.controller';
import { motivoDesligamentoProviders } from './motivo-desligamento.providers';
import { MotivoDesligamentoService } from './motivo-desligamento.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MotivoDesligamentoController],
  providers: [...motivoDesligamentoProviders, MotivoDesligamentoService],
})
export class MotivoDesligamentoModule {}
