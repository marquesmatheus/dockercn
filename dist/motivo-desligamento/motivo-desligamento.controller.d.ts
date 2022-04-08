import { MotivoDesligamento } from './motivo-desligamento.entity';
import { MotivoDesligamentoService } from './motivo-desligamento.service';
import { MotivoDesligamentoDTO } from './motivo-desligamento.dto';
export declare class MotivoDesligamentoController {
    private readonly motivoDesligamentoService;
    constructor(motivoDesligamentoService: MotivoDesligamentoService);
    private genericService;
    get(): Promise<MotivoDesligamento[]>;
    getById(id: number): Promise<MotivoDesligamento[]>;
    post(body: MotivoDesligamentoDTO): Promise<import("../responses").Response>;
    put(body: MotivoDesligamentoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
