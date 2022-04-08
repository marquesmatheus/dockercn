import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EstadosController } from './estados.controller';
import { estadosProviders } from './estados.providers';
import { EstadosService } from './estados.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EstadosController],
  providers: [...estadosProviders, EstadosService],
})
export class EstadosModule {}
