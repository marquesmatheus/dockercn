import { Repository } from 'typeorm';
import { ValidadePassaporte } from './validade-passaporte.entity';
export declare class ValidadePassaporteService {
    private validadePassaporteRepository;
    constructor(validadePassaporteRepository: Repository<ValidadePassaporte>);
    getinstance(): Repository<ValidadePassaporte>;
}
