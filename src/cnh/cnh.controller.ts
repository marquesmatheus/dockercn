import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cnh } from './cnh.entity';
import { CnhService } from './cnh.service';
import { GenericService } from '../generic.service';
import { CnhDTO } from './cnh.dto';

@Controller('cnh')
export class CnhController {
  constructor(private readonly cnhService: CnhService) {}

  private genericService: GenericService<Cnh> = new GenericService(
    this.cnhService.getinstance(),
  );

  @Get()
  async get(): Promise<Cnh[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Cnh[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: CnhDTO) {
    return await this.genericService.post(new Cnh().init(body));
  }

  @Put()
  async put(@Body() body: CnhDTO) {
    let cnh = new Cnh().init(body);
    return await this.genericService.put(cnh.id, cnh);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
