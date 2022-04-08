import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FrenteMissao } from './frente-missao.entity';
import { FrenteMissaoService } from './frente-missao.service';
import { GenericService } from '../generic.service';
import { FrenteMissaoDTO } from './frente-missao.dto';

@Controller('frente-missao')
export class FrenteMissaoController {
  constructor(private readonly frenteMissaoService: FrenteMissaoService) {}

  private genericService: GenericService<FrenteMissao> = new GenericService(
    this.frenteMissaoService.getinstance(),
  );

  @Get()
  async get(): Promise<FrenteMissao[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<FrenteMissao[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: FrenteMissaoDTO) {
    return await this.genericService.post(new FrenteMissao().init(body));
  }

  @Put()
  async put(@Body() body: FrenteMissaoDTO) {
    let frenteMissao = new FrenteMissao().init(body);
    return await this.genericService.put(frenteMissao.id, frenteMissao);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
