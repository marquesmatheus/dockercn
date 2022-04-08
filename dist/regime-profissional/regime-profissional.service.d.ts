import { Repository } from 'typeorm';
import { RegimeProfissional } from './regime-profissional.entity';
export declare class RegimeProfissionalService {
    private regimeProfissionalRepository;
    constructor(regimeProfissionalRepository: Repository<RegimeProfissional>);
    getinstance(): Repository<RegimeProfissional>;
}
