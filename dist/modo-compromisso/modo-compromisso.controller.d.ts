import { ModoCompromisso } from './modo-compromisso.entity';
import { ModoCompromissoService } from './modo-compromisso.service';
import { ModoCompromissoDTO } from './modo-compromisso.dto';
export declare class ModoCompromissoController {
    private readonly modoCompromissoService;
    constructor(modoCompromissoService: ModoCompromissoService);
    private genericService;
    get(): Promise<ModoCompromisso[]>;
    getById(id: number): Promise<ModoCompromisso[]>;
    post(body: ModoCompromissoDTO): Promise<import("../responses").Response>;
    put(body: ModoCompromissoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
