import { FrenteMissao } from './frente-missao.entity';
import { FrenteMissaoService } from './frente-missao.service';
import { FrenteMissaoDTO } from './frente-missao.dto';
export declare class FrenteMissaoController {
    private readonly frenteMissaoService;
    constructor(frenteMissaoService: FrenteMissaoService);
    private genericService;
    get(): Promise<FrenteMissao[]>;
    getById(id: number): Promise<FrenteMissao[]>;
    post(body: FrenteMissaoDTO): Promise<import("../responses").Response>;
    put(body: FrenteMissaoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
