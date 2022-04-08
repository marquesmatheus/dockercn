import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GovernoLocalController } from './governo-local.controller';
import { governoLocalProviders } from './governo-local.providers';
import { GovernoLocalService } from './governo-local.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GovernoLocalController],
  providers: [...governoLocalProviders, GovernoLocalService],
})
export class GovernoLocalModule {}
