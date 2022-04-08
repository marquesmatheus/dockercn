import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ModoCompromisso } from './modo-compromisso.entity';
import { ModoCompromissoService } from './modo-compromisso.service';
import { GenericService } from '../generic.service';
import { ModoCompromissoDTO } from './modo-compromisso.dto';

@Controller('modo-compromisso')
export class ModoCompromissoController {
  constructor(
    private readonly modoCompromissoService: ModoCompromissoService,
  ) {}

  private genericService: GenericService<ModoCompromisso> = new GenericService(
    this.modoCompromissoService.getinstance(),
  );

  @Get()
  async get(): Promise<ModoCompromisso[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<ModoCompromisso[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: ModoCompromissoDTO) {
    return await this.genericService.post(new ModoCompromisso().init(body));
  }

  @Put()
  async put(@Body() body: ModoCompromissoDTO) {
    let modoCompromisso = new ModoCompromisso().init(body);
    return await this.genericService.put(modoCompromisso.id, modoCompromisso);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
