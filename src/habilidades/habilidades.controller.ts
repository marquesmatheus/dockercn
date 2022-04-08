import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Habilidades } from './habilidades.entity';
import { HabilidadesService } from './habilidades.service';
import { GenericService } from '../generic.service';
import { HabilidadesDTO } from './habilidades.dto';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  private genericService: GenericService<Habilidades> = new GenericService(
    this.habilidadesService.getinstance(),
  );

  @Get()
  async get(): Promise<Habilidades[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Habilidades[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: HabilidadesDTO) {
    return await this.genericService.post(new Habilidades().init(body));
  }

  @Put()
  async put(@Body() body: HabilidadesDTO) {
    let habilidades = new Habilidades().init(body);
    return await this.genericService.put(habilidades.id, habilidades);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
