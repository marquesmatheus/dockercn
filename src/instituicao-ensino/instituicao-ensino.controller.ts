import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InstituicaoEnsino } from './instituicao-ensino.entity';
import { InstituicaoEnsinoService } from './instituicao-ensino.service';
import { GenericService } from '../generic.service';
import { InstituicaoEnsinoDTO } from './instituicao-ensino.dto';

@Controller('instituicao-ensino')
export class InstituicaoEnsinoController {
  constructor(
    private readonly instituicaoEnsinoService: InstituicaoEnsinoService,
  ) {}

  private genericService: GenericService<InstituicaoEnsino> =
    new GenericService(this.instituicaoEnsinoService.getinstance());

  @Get()
  async get(): Promise<InstituicaoEnsino[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<InstituicaoEnsino[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: InstituicaoEnsinoDTO) {
    return await this.genericService.post(new InstituicaoEnsino().init(body));
  }

  @Put()
  async put(@Body() body: InstituicaoEnsinoDTO) {
    let instituicaoEnsino = new InstituicaoEnsino().init(body);
    return await this.genericService.put(
      instituicaoEnsino.id,
      instituicaoEnsino,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
