import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AfastamentoTemporario } from './afastamento-temporario.entity';
import { AfastamentoTemporarioService } from './afastamento-temporario.service';
import { GenericService } from '../generic.service';
import { AfastamentoTemporarioDTO } from './afastamento-temporario.dto';

@Controller('afastamento-temporario')
export class AfastamentoTemporarioController {
  constructor(
    private readonly afastamentoTemporarioService: AfastamentoTemporarioService,
  ) {}

  private genericService: GenericService<AfastamentoTemporario> =
    new GenericService(this.afastamentoTemporarioService.getinstance());

  @Get()
  async get(): Promise<AfastamentoTemporario[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<AfastamentoTemporario[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: AfastamentoTemporarioDTO) {
    return await this.genericService.post(
      new AfastamentoTemporario().init(body),
    );
  }

  @Put()
  async put(@Body() body: AfastamentoTemporarioDTO) {
    let afastamentoTemporario = new AfastamentoTemporario().init(body);
    return await this.genericService.put(
      afastamentoTemporario.id,
      afastamentoTemporario,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
