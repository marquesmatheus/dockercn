import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CargosConselho } from './cargos-conselho.entity';
import { CargosConselhoService } from './cargos-conselho.service';
import { GenericService } from '../generic.service';
import { CargosConselhoDTO } from './cargos-conselho.dto';

@Controller('cargos-conselho')
export class CargosConselhoController {
  constructor(private readonly cargosConselhoService: CargosConselhoService) {}

  private genericService: GenericService<CargosConselho> = new GenericService(
    this.cargosConselhoService.getinstance(),
  );

  @Get()
  async get(): Promise<CargosConselho[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<CargosConselho[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: CargosConselhoDTO) {
    return await this.genericService.post(new CargosConselho().init(body));
  }

  @Put()
  async put(@Body() body: CargosConselhoDTO) {
    let cargosConselho = new CargosConselho().init(body);
    return await this.genericService.put(cargosConselho.id, cargosConselho);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
