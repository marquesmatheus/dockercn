import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrauPertenca } from './grau-pertenca.entity';
import { GrauPertencaService } from './grau-pertenca.service';
import { GenericService } from '../generic.service';
import { GrauPertencaDTO } from './grau-pertenca.dto';

@Controller('grau-pertenca')
export class GrauPertencaController {
  constructor(private readonly grauPertencaService: GrauPertencaService) {}

  private genericService: GenericService<GrauPertenca> = new GenericService(
    this.grauPertencaService.getinstance(),
  );

  @Get()
  async get(): Promise<GrauPertenca[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<GrauPertenca[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: GrauPertencaDTO) {
    return await this.genericService.post(new GrauPertenca().init(body));
  }

  @Put()
  async put(@Body() body: GrauPertencaDTO) {
    let cidade = new GrauPertenca().init(body);
    return await this.genericService.put(cidade.id, cidade);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
