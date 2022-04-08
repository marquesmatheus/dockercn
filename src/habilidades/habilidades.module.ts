import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { HabilidadesController } from './habilidades.controller';
import { habilidadesProviders } from './habilidades.providers';
import { HabilidadesService } from './habilidades.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HabilidadesController],
  providers: [...habilidadesProviders, HabilidadesService],
})
export class HabilidadesModule {}
