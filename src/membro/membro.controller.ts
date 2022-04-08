import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Membro } from './membro.entity';
import { MembroService } from './membro.service';
import { GenericService } from '../generic.service';
import { MembroDTO } from './membro.dto';

@Controller('membro')
export class MembroController {
  constructor(private readonly membroService: MembroService) {}

  private genericService: GenericService<Membro> = new GenericService(
    this.membroService.getinstance(),
  );

  @Get()
  async get(): Promise<Membro[]> {
    return await this.genericService.get();
  }

  @Get('/info')
  async getInfo(): Promise<Membro[]> {
    return await this.membroService.getInfo();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Membro[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: MembroDTO) {
    return await this.genericService.post(new Membro().init(body));
  }

  @Put()
  async put(@Body() body: MembroDTO) {
    let membro = new Membro().init(body);
    return await this.genericService.put(membro.id, membro);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
