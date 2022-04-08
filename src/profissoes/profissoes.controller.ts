import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Profissoes } from './profissoes.entity';
import { ProfissoesService } from './profissoes.service';
import { GenericService } from '../generic.service';
import { ProfissoesDTO } from './profissoes.dto';

@Controller('profissoes')
export class ProfissoesController {
  constructor(private readonly profissoesService: ProfissoesService) {}

  private genericService: GenericService<Profissoes> = new GenericService(
    this.profissoesService.getinstance(),
  );

  @Get()
  async get(): Promise<Profissoes[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Profissoes[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: ProfissoesDTO) {
    return await this.genericService.post(new Profissoes().init(body));
  }

  @Put()
  async put(@Body() body: ProfissoesDTO) {
    let profissoes = new Profissoes().init(body);
    return await this.genericService.put(profissoes.id, profissoes);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
