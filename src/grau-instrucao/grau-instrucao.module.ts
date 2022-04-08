import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GrauInstrucaoController } from './grau-instrucao.controller';
import { grauInstrucaoProviders } from './grau-instrucao.providers';
import { GrauInstrucaoService } from './grau-instrucao.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GrauInstrucaoController],
  providers: [...grauInstrucaoProviders, GrauInstrucaoService],
})
export class GrauInstrucaoModule {}
