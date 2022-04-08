import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { RegimeProfissionalController } from './regime-profissional.controller';
import { regimeProfissionalProviders } from './regime-profissional.providers';
import { RegimeProfissionalService } from './regime-profissional.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RegimeProfissionalController],
  providers: [...regimeProfissionalProviders, RegimeProfissionalService],
})
export class RegimeProfissionalModule {}
