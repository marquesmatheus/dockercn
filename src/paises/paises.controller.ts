import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Paises } from './paises.entity';
import { PaisesService } from './paises.service';
import { GenericService } from '../generic.service';
import { PaisesDTO } from './paises.dto';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  private genericService: GenericService<Paises> = new GenericService(
    this.paisesService.getinstance(),
  );

  @Get()
  async get(): Promise<Paises[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Paises[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: PaisesDTO) {
    return await this.genericService.post(new Paises().init(body));
  }

  @Put()
  async put(@Body() body: PaisesDTO) {
    let pais = new Paises().init(body);
    return await this.genericService.put(pais.id, pais);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
