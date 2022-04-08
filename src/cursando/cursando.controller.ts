import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cursando } from './cursando.entity';
import { CursandoService } from './cursando.service';
import { GenericService } from '../generic.service';
import { CursandoDTO } from './cursando.dto';

@Controller('cursando')
export class CursandoController {
  constructor(private readonly cursandoService: CursandoService) {}

  private genericService: GenericService<Cursando> = new GenericService(
    this.cursandoService.getinstance(),
  );

  @Get()
  async get(): Promise<Cursando[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Cursando[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: CursandoDTO) {
    return await this.genericService.post(new Cursando().init(body));
  }

  @Put()
  async put(@Body() body: CursandoDTO) {
    let cursando = new Cursando().init(body);
    return await this.genericService.put(cursando.id, cursando);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
