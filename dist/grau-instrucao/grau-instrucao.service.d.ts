import { Repository } from 'typeorm';
import { GrauInstrucao } from './grau-instrucao.entity';
export declare class GrauInstrucaoService {
    private grauInstrucaoRepository;
    constructor(grauInstrucaoRepository: Repository<GrauInstrucao>);
    getinstance(): Repository<GrauInstrucao>;
}
