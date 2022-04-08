import { Repository } from 'typeorm';
import { Departamento } from './departamento.entity';
export declare class DepartamentoService {
    private departamentoRepository;
    constructor(departamentoRepository: Repository<Departamento>);
    getinstance(): Repository<Departamento>;
}
