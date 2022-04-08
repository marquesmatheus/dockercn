import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ModoCompromissoController } from './modo-compromisso.controller';
import { modoCompromissoProviders } from './modo-compromisso.providers';
import { ModoCompromissoService } from './modo-compromisso.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ModoCompromissoController],
  providers: [...modoCompromissoProviders, ModoCompromissoService],
})
export class ModoCompromissoModule {}
