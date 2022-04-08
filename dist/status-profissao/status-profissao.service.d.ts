import { Repository } from 'typeorm';
import { StatusProfissao } from './status-profissao.entity';
export declare class StatusProfissaoService {
    private statusProfissaoRepository;
    constructor(statusProfissaoRepository: Repository<StatusProfissao>);
    getinstance(): Repository<StatusProfissao>;
}
