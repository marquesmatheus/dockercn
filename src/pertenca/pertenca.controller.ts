import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Pertenca } from './pertenca.entity';
import { PertencaService } from './pertenca.service';
import { GenericService } from '../generic.service';
import { PertencaDTO } from './pertenca.dto';

@Controller('pertenca')
export class PertencaController {
  constructor(private readonly pertencaService: PertencaService) {}

  private genericService: GenericService<Pertenca> = new GenericService(
    this.pertencaService.getinstance(),
  );

  @Get()
  async get(): Promise<Pertenca[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Pertenca[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: PertencaDTO) {
    return await this.genericService.post(new Pertenca().init(body));
  }

  @Put()
  async put(@Body() body: PertencaDTO) {
    let pertenca = new Pertenca().init(body);
    return await this.genericService.put(pertenca.id, pertenca);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
