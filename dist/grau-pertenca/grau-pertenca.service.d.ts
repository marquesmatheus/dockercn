import { Repository } from 'typeorm';
import { GrauPertenca } from './grau-pertenca.entity';
export declare class GrauPertencaService {
    private grauPertencaRepository;
    constructor(grauPertencaRepository: Repository<GrauPertenca>);
    getinstance(): Repository<GrauPertenca>;
}
