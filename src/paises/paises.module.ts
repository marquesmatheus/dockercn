import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PaisesController } from './paises.controller';
import { paisesProviders } from './paises.providers';
import { PaisesService } from './paises.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PaisesController],
  providers: [...paisesProviders, PaisesService],
})
export class PaisesModule {}
