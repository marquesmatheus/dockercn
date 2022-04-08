import { Repository } from 'typeorm';
import { Paises } from './paises.entity';
export declare class PaisesService {
    private paisesRepository;
    constructor(paisesRepository: Repository<Paises>);
    getinstance(): Repository<Paises>;
    get(): Promise<Paises[]>;
}
