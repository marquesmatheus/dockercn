import { Repository } from 'typeorm';
import { Pertenca } from './pertenca.entity';
export declare class PertencaService {
    private pertencaRepository;
    constructor(pertencaRepository: Repository<Pertenca>);
    getinstance(): Repository<Pertenca>;
}
