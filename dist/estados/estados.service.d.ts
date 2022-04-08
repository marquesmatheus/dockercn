import { Repository } from 'typeorm';
import { Estados } from './estados.entity';
export declare class EstadosService {
    private estadosRepository;
    constructor(estadosRepository: Repository<Estados>);
    getinstance(): Repository<Estados>;
    getInfo(): Promise<Estados[]>;
    getInfoById(id: number): Promise<Estados>;
    getEstadosDoPais(id: number): Promise<Estados[]>;
}
