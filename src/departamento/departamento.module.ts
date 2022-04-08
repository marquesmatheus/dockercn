import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DepartamentoController } from './departamento.controller';
import { departamentoProviders } from './departamento.providers';
import { DepartamentoService } from './departamento.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartamentoController],
  providers: [...departamentoProviders, DepartamentoService],
})
export class DepartamentoModule {}
