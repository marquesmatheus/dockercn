import { Repository } from 'typeorm';
import { EstadoCivil } from './estado-civil.entity';
export declare class EstadoCivilService {
    private estadoCivilRepository;
    constructor(estadoCivilRepository: Repository<EstadoCivil>);
    getinstance(): Repository<EstadoCivil>;
}
