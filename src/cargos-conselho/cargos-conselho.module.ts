import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CargosConselhoController } from './cargos-conselho.controller';
import { cargosConselhoProviders } from './cargos-conselho.providers';
import { CargosConselhoService } from './cargos-conselho.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CargosConselhoController],
  providers: [...cargosConselhoProviders, CargosConselhoService],
})
export class CargosConselhoModule {}
