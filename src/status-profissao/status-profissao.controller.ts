import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StatusProfissao } from './status-profissao.entity';
import { StatusProfissaoService } from './status-profissao.service';
import { GenericService } from '../generic.service';
import { StatusProfissaoDTO } from './status-profissao.dto';

@Controller('status-profissao')
export class StatusProfissaoController {
  constructor(
    private readonly statusProfissaoService: StatusProfissaoService,
  ) {}

  private genericService: GenericService<StatusProfissao> = new GenericService(
    this.statusProfissaoService.getinstance(),
  );

  @Get()
  async get(): Promise<StatusProfissao[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<StatusProfissao[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: StatusProfissaoDTO) {
    return await this.genericService.post(new StatusProfissao().init(body));
  }

  @Put()
  async put(@Body() body: StatusProfissaoDTO) {
    let statusProfissao = new StatusProfissao().init(body);
    return await this.genericService.put(statusProfissao.id, statusProfissao);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
