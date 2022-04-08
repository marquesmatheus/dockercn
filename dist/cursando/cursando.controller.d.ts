import { Cursando } from './cursando.entity';
import { CursandoService } from './cursando.service';
import { CursandoDTO } from './cursando.dto';
export declare class CursandoController {
    private readonly cursandoService;
    constructor(cursandoService: CursandoService);
    private genericService;
    get(): Promise<Cursando[]>;
    getById(id: number): Promise<Cursando[]>;
    post(body: CursandoDTO): Promise<import("../responses").Response>;
    put(body: CursandoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
