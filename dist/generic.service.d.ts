import { Repository } from 'typeorm';
import { Response } from './responses';
export declare class GenericService<T> {
    private genericRepository;
    constructor(genericRepository: Repository<T>);
    isValid(data: object): Promise<Boolean>;
    get(): Promise<T[]>;
    getById(id: Array<number>): Promise<T[]>;
    post(body: object): Promise<Response>;
    put(id: number, body: object): Promise<Response>;
    delete(id: number): Promise<Response>;
}
