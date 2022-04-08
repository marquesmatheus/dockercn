import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CursandoController } from './cursando.controller';
import { cursandoProviders } from './cursando.providers';
import { CursandoService } from './cursando.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CursandoController],
  providers: [...cursandoProviders, CursandoService],
})
export class CursandoModule {}
