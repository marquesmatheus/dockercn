import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Departamento } from './departamento.entity';
import { DepartamentoService } from './departamento.service';
import { GenericService } from '../generic.service';
import { DepartamentoDTO } from './departamento.dto';

@Controller('departamento')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  private genericService: GenericService<Departamento> = new GenericService(
    this.departamentoService.getinstance(),
  );

  @Get()
  async get(): Promise<Departamento[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Departamento[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: DepartamentoDTO) {
    return await this.genericService.post(new Departamento().init(body));
  }

  @Put()
  async put(@Body() body: DepartamentoDTO) {
    let departamento = new Departamento().init(body);
    return await this.genericService.put(departamento.id, departamento);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
