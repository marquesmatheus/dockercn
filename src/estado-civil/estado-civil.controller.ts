import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EstadoCivil } from './estado-civil.entity';
import { EstadoCivilService } from './estado-civil.service';
import { GenericService } from '../generic.service';
import { EstadoCivilDTO } from './estado-civil.dto';

@Controller('estado-civil')
export class EstadoCivilController {
  constructor(private readonly estadoCivilService: EstadoCivilService) {}

  private genericService: GenericService<EstadoCivil> = new GenericService(
    this.estadoCivilService.getinstance(),
  );

  @Get()
  async get(): Promise<EstadoCivil[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<EstadoCivil[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: EstadoCivilDTO) {
    return await this.genericService.post(new EstadoCivil().init(body));
  }

  @Put()
  async put(@Body() body: EstadoCivilDTO) {
    let estadoCivil = new EstadoCivil().init(body);
    return await this.genericService.put(estadoCivil.id, estadoCivil);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
