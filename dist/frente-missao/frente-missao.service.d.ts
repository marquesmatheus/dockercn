import { Repository } from 'typeorm';
import { FrenteMissao } from './frente-missao.entity';
export declare class FrenteMissaoService {
    private frenteMissaoRepository;
    constructor(frenteMissaoRepository: Repository<FrenteMissao>);
    getinstance(): Repository<FrenteMissao>;
}
