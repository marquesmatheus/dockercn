import { Repository } from 'typeorm';
import { InstituicaoAtuacao } from './instituicao-missionaria.entity';
export declare class InstituicaoAtuacaoService {
    private instituicaoAtuacaoRepository;
    constructor(instituicaoAtuacaoRepository: Repository<InstituicaoAtuacao>);
    getinstance(): Repository<InstituicaoAtuacao>;
}
