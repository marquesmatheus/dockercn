import { Repository } from 'typeorm';
import { ModoCompromisso } from './modo-compromisso.entity';
export declare class ModoCompromissoService {
    private modoCompromissoRepository;
    constructor(modoCompromissoRepository: Repository<ModoCompromisso>);
    getinstance(): Repository<ModoCompromisso>;
}
