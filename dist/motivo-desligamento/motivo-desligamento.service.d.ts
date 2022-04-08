import { Repository } from 'typeorm';
import { MotivoDesligamento } from './motivo-desligamento.entity';
export declare class MotivoDesligamentoService {
    private motivoDesligamentoRepository;
    constructor(motivoDesligamentoRepository: Repository<MotivoDesligamento>);
    getinstance(): Repository<MotivoDesligamento>;
}
