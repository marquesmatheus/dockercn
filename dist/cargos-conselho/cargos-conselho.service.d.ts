import { Repository } from 'typeorm';
import { CargosConselho } from './cargos-conselho.entity';
export declare class CargosConselhoService {
    private cargosConselhoRepository;
    constructor(cargosConselhoRepository: Repository<CargosConselho>);
    getinstance(): Repository<CargosConselho>;
}
