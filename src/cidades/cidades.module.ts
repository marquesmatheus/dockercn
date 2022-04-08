import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CidadesController } from './cidades.controller';
import { cidadesProviders } from './cidades.providers';
import { CidadesService } from './cidades.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CidadesController],
  providers: [...cidadesProviders, CidadesService],
})
export class CidadesModule {}
