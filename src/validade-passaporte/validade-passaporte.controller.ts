import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ValidadePassaporte } from './validade-passaporte.entity';
import { ValidadePassaporteService } from './validade-passaporte.service';
import { GenericService } from '../generic.service';
import { ValidadePassaporteDTO } from './validade-passaporte.dto';

@Controller('validade-passaporte')
export class ValidadePassaporteController {
  constructor(
    private readonly validadePassaporteService: ValidadePassaporteService,
  ) {}

  private genericService: GenericService<ValidadePassaporte> =
    new GenericService(this.validadePassaporteService.getinstance());

  @Get()
  async get(): Promise<ValidadePassaporte[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<ValidadePassaporte[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: ValidadePassaporteDTO) {
    return await this.genericService.post(new ValidadePassaporte().init(body));
  }

  @Put()
  async put(@Body() body: ValidadePassaporteDTO) {
    let validadePassaporte = new ValidadePassaporte().init(body);
    return await this.genericService.put(
      validadePassaporte.id,
      validadePassaporte,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
