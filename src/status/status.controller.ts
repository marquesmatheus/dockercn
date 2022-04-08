import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Status } from './status.entity';
import { StatusService } from './status.service';
import { GenericService } from '../generic.service';
import { StatusDTO } from './status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  private genericService: GenericService<Status> = new GenericService(
    this.statusService.getinstance(),
  );

  @Get()
  async get(): Promise<Status[]> {
    return await this.genericService.get();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<Status[]> {
    return await this.genericService.getById([id]);
  }

  @Post()
  async post(@Body() body: StatusDTO) {
    return await this.genericService.post(new Status().init(body));
  }

  @Put()
  async put(@Body() body: StatusDTO) {
    let status = new Status().init(body);
    return await this.genericService.put(status.id, status);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.genericService.delete(id);
  }
}
