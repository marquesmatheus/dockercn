import { Repository } from 'typeorm';
import { Habilidades } from './habilidades.entity';
export declare class HabilidadesService {
    private habilidadesRepository;
    constructor(habilidadesRepository: Repository<Habilidades>);
    getinstance(): Repository<Habilidades>;
}
