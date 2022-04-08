import { Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import {
  InsertResult,
  QueryFailedError,
  Repository,
  UpdateResult,
} from 'typeorm';
import { Response } from './responses';

@Injectable()
export class GenericService<T> {
  constructor(
    @Inject('GENERIC_REPOSITORY')
    private genericRepository: Repository<T>,
  ) {}

  async isValid(data: object): Promise<Boolean> {
    const validations = await validate(data).then((e) => e);
    console.log(validations);
    return validations.length === 0;
  }

  async get() {
    return this.genericRepository.find();
  }

  async getById(id: Array<number>) {
    return this.genericRepository.findByIds(id);
  }

  async post(body: object): Promise<Response> {
    return (await this.isValid(body))
      ? await this.genericRepository
          .insert(body)
          .then((result) => {
            console.log(result);
            return { status: 'sucesso' } as Response;
          })
          .catch((erro: QueryFailedError) => {
            console.log(erro);
            return {
              status: erro.driverError.errno === 1062 ? 'duplicado' : 'erro',
            } as Response;
          })
      : ({ status: 'dados invalidos' } as Response);
  }

  async put(id: number, body: object): Promise<Response> {
    return (await this.isValid(body))
      ? await this.genericRepository
          .update(id, body)
          .then((result: UpdateResult) => {
            return result.affected === 0
              ? ({ status: 'sem efeito' } as Response)
              : ({ status: 'sucesso' } as Response);
          })
          .catch((erro: QueryFailedError) => {
            console.log(erro);
            return { status: 'erro' } as Response;
          })
      : ({ status: 'dados invalidos' } as Response);
  }

  async delete(id: number): Promise<Response> {
    return (await this.genericRepository.delete(id)).affected === 0
      ? ({ status: 'sem efeito' } as Response)
      : ({ status: 'sucesso' } as Response);
  }
}
