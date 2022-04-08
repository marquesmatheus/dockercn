import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ValidadePassaporteController } from './validade-passaporte.controller';
import { validadePassaporteProviders } from './validade-passaporte.providers';
import { ValidadePassaporteService } from './validade-passaporte.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ValidadePassaporteController],
  providers: [...validadePassaporteProviders, ValidadePassaporteService],
})
export class ValidadePassaporteModule {}
