import { Repository } from 'typeorm';
import { AfastamentoTemporario } from './afastamento-temporario.entity';
export declare class AfastamentoTemporarioService {
    private afastamentoTemporarioRepository;
    constructor(afastamentoTemporarioRepository: Repository<AfastamentoTemporario>);
    getinstance(): Repository<AfastamentoTemporario>;
}
