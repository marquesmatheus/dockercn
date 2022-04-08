import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FrenteMissaoController } from './frente-missao.controller';
import { frenteMissaoProviders } from './frente-missao.providers';
import { FrenteMissaoService } from './frente-missao.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FrenteMissaoController],
  providers: [...frenteMissaoProviders, FrenteMissaoService],
})
export class FrenteMissaoModule {}
