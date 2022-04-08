import { MotivoDesligamentoDTO } from './motivo-desligamento.dto';
export declare class MotivoDesligamento {
    id: number;
    motivo: string;
    init(body: MotivoDesligamentoDTO): MotivoDesligamento;
}
