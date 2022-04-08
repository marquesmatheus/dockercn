import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AfastamentoTemporarioController } from './afastamento-temporario.controller';
import { afastamentoTemporarioProviders } from './afastamento-temporario.providers';
import { AfastamentoTemporarioService } from './afastamento-temporario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AfastamentoTemporarioController],
  providers: [...afastamentoTemporarioProviders, AfastamentoTemporarioService],
})
export class AfastamentoTemporarioModule {}
