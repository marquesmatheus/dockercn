import { Repository } from 'typeorm';
import { Profissoes } from './profissoes.entity';
export declare class ProfissoesService {
    private profissoesRepository;
    constructor(profissoesRepository: Repository<Profissoes>);
    getinstance(): Repository<Profissoes>;
}
