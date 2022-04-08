import { Profissoes } from './profissoes.entity';
import { ProfissoesService } from './profissoes.service';
import { ProfissoesDTO } from './profissoes.dto';
export declare class ProfissoesController {
    private readonly profissoesService;
    constructor(profissoesService: ProfissoesService);
    private genericService;
    get(): Promise<Profissoes[]>;
    getById(id: number): Promise<Profissoes[]>;
    post(body: ProfissoesDTO): Promise<import("../responses").Response>;
    put(body: ProfissoesDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
