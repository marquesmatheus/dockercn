import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InstituicaoAtuacaoController } from './instituicao-missionaria.controller';
import { instituicaoAtuacaoProviders } from './instituicao-missionaria.providers';
import { InstituicaoAtuacaoService } from './instituicao-missionaria.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InstituicaoAtuacaoController],
  providers: [...instituicaoAtuacaoProviders, InstituicaoAtuacaoService],
})
export class InstituicaoAtuacaoModule {}
