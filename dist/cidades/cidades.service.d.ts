import { Repository } from 'typeorm';
import { Cidades } from './cidades.entity';
export declare class CidadesService {
    private cidadesRepository;
    constructor(cidadesRepository: Repository<Cidades>);
    getinstance(): Repository<Cidades>;
    getInfo(): Promise<Cidades[]>;
    getInfoById(id: number): Promise<Cidades>;
    getCidadesDoEstado(id: number): Promise<Cidades[]>;
}
