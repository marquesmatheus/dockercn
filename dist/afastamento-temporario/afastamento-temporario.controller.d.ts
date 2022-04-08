import { AfastamentoTemporario } from './afastamento-temporario.entity';
import { AfastamentoTemporarioService } from './afastamento-temporario.service';
import { AfastamentoTemporarioDTO } from './afastamento-temporario.dto';
export declare class AfastamentoTemporarioController {
    private readonly afastamentoTemporarioService;
    constructor(afastamentoTemporarioService: AfastamentoTemporarioService);
    private genericService;
    get(): Promise<AfastamentoTemporario[]>;
    getById(id: number): Promise<AfastamentoTemporario[]>;
    post(body: AfastamentoTemporarioDTO): Promise<import("../responses").Response>;
    put(body: AfastamentoTemporarioDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
