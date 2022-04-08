import { StatusProfissao } from './status-profissao.entity';
import { StatusProfissaoService } from './status-profissao.service';
import { StatusProfissaoDTO } from './status-profissao.dto';
export declare class StatusProfissaoController {
    private readonly statusProfissaoService;
    constructor(statusProfissaoService: StatusProfissaoService);
    private genericService;
    get(): Promise<StatusProfissao[]>;
    getById(id: number): Promise<StatusProfissao[]>;
    post(body: StatusProfissaoDTO): Promise<import("../responses").Response>;
    put(body: StatusProfissaoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
