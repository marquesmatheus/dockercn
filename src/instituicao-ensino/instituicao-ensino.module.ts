import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { InstituicaoEnsinoController } from './instituicao-ensino.controller';
import { instituicaoEnsinoProviders } from './instituicao-ensino.providers';
import { InstituicaoEnsinoService } from './instituicao-ensino.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InstituicaoEnsinoController],
  providers: [...instituicaoEnsinoProviders, InstituicaoEnsinoService],
})
export class InstituicaoEnsinoModule {}
