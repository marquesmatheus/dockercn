import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EstadoCivilController } from './estado-civil.controller';
import { estadoCivilProviders } from './estado-civil.providers';
import { EstadoCivilService } from './estado-civil.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EstadoCivilController],
  providers: [...estadoCivilProviders, EstadoCivilService],
})
export class EstadoCivilModule {}
