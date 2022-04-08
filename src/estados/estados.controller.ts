import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Estados } from './estados.entity';
import { EstadosService } from './estados.service';
import { GenericService } from '../generic.service';
import { EstadosDTO } from './estados.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  private genericService: GenericService<Estados> = new GenericService(
    this.estadosService.getinstance(),
  );

  @Get()
  async get(): Promise<Estados[]> {
    return await this.genericService.get();
  }

  @Get('/info')
  async getInfo(): Promise<Estados[]> {
    return await this.estadosService.getInfo();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Estados[]> {
    return await this.genericService.getById([id]);
  }

  @Get('/:id/info')
  async getInfoById(@Param('id') id: number): Promise<Estados> {
    return await this.estadosService.getInfoById(id);
  }

  @Get('/do-pais/:id')
  async getEstadosDoPais(@Param('id') id: number): Promise<Estados[]> {
    return await this.estadosService.getEstadosDoPais(id);
  }

  @Post()
  async post(@Body() body: EstadosDTO) {
    return await this.genericService.post(new Estados().init(body));
  }

  @Put()
  async put(@Body() body: EstadosDTO) {
    let estado = new Estados().init(body);
    return await this.genericService.put(estado.id, estado);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
