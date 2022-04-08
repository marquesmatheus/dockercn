import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MotivoDesligamento } from './motivo-desligamento.entity';
import { MotivoDesligamentoService } from './motivo-desligamento.service';
import { GenericService } from '../generic.service';
import { MotivoDesligamentoDTO } from './motivo-desligamento.dto';

@Controller('motivo-desligamento')
export class MotivoDesligamentoController {
  constructor(
    private readonly motivoDesligamentoService: MotivoDesligamentoService,
  ) {}

  private genericService: GenericService<MotivoDesligamento> =
    new GenericService(this.motivoDesligamentoService.getinstance());

  @Get()
  async get(): Promise<MotivoDesligamento[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<MotivoDesligamento[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: MotivoDesligamentoDTO) {
    return await this.genericService.post(new MotivoDesligamento().init(body));
  }

  @Put()
  async put(@Body() body: MotivoDesligamentoDTO) {
    let motivoDesligamento = new MotivoDesligamento().init(body);
    return await this.genericService.put(
      motivoDesligamento.id,
      motivoDesligamento,
    );
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
