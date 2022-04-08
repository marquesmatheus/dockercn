import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegimeProfissional } from './regime-profissional.entity';
import { RegimeProfissionalService } from './regime-profissional.service';
import { GenericService } from '../generic.service';
import { RegimeProfissionalDTO } from './regime-profissional.dto';

@Controller('regime-profissional')
export class RegimeProfissionalController {
  constructor(
    private readonly regimeProfissionalService: RegimeProfissionalService,
  ) {}

  private genericService: GenericService<RegimeProfissional> =
    new GenericService(this.regimeProfissionalService.getinstance());

  @Get()
  async get(): Promise<RegimeProfissional[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<RegimeProfissional[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: RegimeProfissionalDTO) {
    return await this.genericService.post(new RegimeProfissional().init(body));
  }

  @Put()
  async put(@Body() body: RegimeProfissionalDTO) {
    let regimeProfissional = new RegimeProfissional().init(body);
    return await this.genericService.put(
      regimeProfissional.id,
      regimeProfissional,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
