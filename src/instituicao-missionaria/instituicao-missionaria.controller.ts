import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InstituicaoAtuacao } from './instituicao-missionaria.entity';
import { InstituicaoAtuacaoService } from './instituicao-missionaria.service';
import { GenericService } from '../generic.service';
import { InstituicaoAtuacaoDTO } from './instituicao-missionaria.dto';

@Controller('instituicao-atuacao')
export class InstituicaoAtuacaoController {
  constructor(
    private readonly instituicaoAtuacaoService: InstituicaoAtuacaoService,
  ) {}

  private genericService: GenericService<InstituicaoAtuacao> =
    new GenericService(this.instituicaoAtuacaoService.getinstance());

  @Get()
  async get(): Promise<InstituicaoAtuacao[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<InstituicaoAtuacao[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: InstituicaoAtuacaoDTO) {
    return await this.genericService.post(new InstituicaoAtuacao().init(body));
  }

  @Put()
  async put(@Body() body: InstituicaoAtuacaoDTO) {
    let instituicaoAtuacao = new InstituicaoAtuacao().init(body);
    return await this.genericService.put(
      instituicaoAtuacao.id,
      instituicaoAtuacao,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
