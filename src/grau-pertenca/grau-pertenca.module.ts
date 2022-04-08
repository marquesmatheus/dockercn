import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GrauPertencaController } from './grau-pertenca.controller';
import { grauPertencaProviders } from './grau-pertenca.providers';
import { GrauPertencaService } from './grau-pertenca.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GrauPertencaController],
  providers: [...grauPertencaProviders, GrauPertencaService],
})
export class GrauPertencaModule {}
