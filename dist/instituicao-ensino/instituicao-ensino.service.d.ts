import { Repository } from 'typeorm';
import { InstituicaoEnsino } from './instituicao-ensino.entity';
export declare class InstituicaoEnsinoService {
    private instituicaoEnsinoRepository;
    constructor(instituicaoEnsinoRepository: Repository<InstituicaoEnsino>);
    getinstance(): Repository<InstituicaoEnsino>;
}
