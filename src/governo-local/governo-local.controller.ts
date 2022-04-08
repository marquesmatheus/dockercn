import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GovernoLocal } from './governo-local.entity';
import { GovernoLocalService } from './governo-local.service';
import { GenericService } from '../generic.service';
import { GovernoLocalDTO } from './governo-local.dto';

@Controller('governo-local')
export class GovernoLocalController {
  constructor(private readonly governoLocalService: GovernoLocalService) {}

  private genericService: GenericService<GovernoLocal> = new GenericService(
    this.governoLocalService.getinstance(),
  );

  @Get()
  async get(): Promise<GovernoLocal[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<GovernoLocal[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: GovernoLocalDTO) {
    return await this.genericService.post(new GovernoLocal().init(body));
  }

  @Put()
  async put(@Body() body: GovernoLocalDTO) {
    let governoLocal = new GovernoLocal().init(body);
    return await this.genericService.put(governoLocal.id, governoLocal);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
