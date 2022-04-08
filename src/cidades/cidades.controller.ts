import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cidades } from './cidades.entity';
import { CidadesService } from './cidades.service';
import { GenericService } from '../generic.service';
import { CidadesDTO } from './cidades.dto';

@Controller('cidades')
export class CidadesController {
  constructor(private readonly cidadesService: CidadesService) {}

  private genericService: GenericService<Cidades> = new GenericService(
    this.cidadesService.getinstance(),
  );

  @Get()
  async get(): Promise<Cidades[]> {
    return await this.genericService.get();
  }

  @Get('/info')
  async getInfo() {
    return await this.cidadesService.getInfo();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Cidades[]> {
    return await this.genericService.getById([id]);
  }

  @Get('/:id/info')
  async getInfoById(@Param('id') id: number): Promise<Cidades> {
    return await this.cidadesService.getInfoById(id);
  }

  @Get('/do-estado/:id')
  async getCidadesDoEstado(@Param('id') id: number): Promise<Cidades[]> {
    return await this.cidadesService.getCidadesDoEstado(id);
  }

  @Post()
  async post(@Body() body: CidadesDTO) {
    return await this.genericService.post(new Cidades().init(body));
  }

  @Put()
  async put(@Body() body: CidadesDTO) {
    let cidade = new Cidades().init(body);
    return await this.genericService.put(cidade.id, cidade);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
