import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrauInstrucao } from './grau-instrucao.entity';
import { GrauInstrucaoService } from './grau-instrucao.service';
import { GenericService } from '../generic.service';
import { GrauInstrucaoDTO } from './grau-instrucao.dto';

@Controller('grau-instrucao')
export class GrauInstrucaoController {
  constructor(private readonly grauInstrucaoService: GrauInstrucaoService) {}

  private genericService: GenericService<GrauInstrucao> = new GenericService(
    this.grauInstrucaoService.getinstance(),
  );

  @Get()
  async get(): Promise<GrauInstrucao[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<GrauInstrucao[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: GrauInstrucaoDTO) {
    return await this.genericService.post(new GrauInstrucao().init(body));
  }

  @Put()
  async put(@Body() body: GrauInstrucaoDTO) {
    let grauInstrucao = new GrauInstrucao().init(body);
    return await this.genericService.put(grauInstrucao.id, grauInstrucao);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
