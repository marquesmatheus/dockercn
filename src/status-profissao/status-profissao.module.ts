import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { StatusProfissaoController } from './status-profissao.controller';
import { statusProfissaoProviders } from './status-profissao.providers';
import { StatusProfissaoService } from './status-profissao.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StatusProfissaoController],
  providers: [...statusProfissaoProviders, StatusProfissaoService],
})
export class StatusProfissaoModule {}
