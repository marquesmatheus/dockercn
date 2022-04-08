import { Habilidades } from './habilidades.entity';
import { HabilidadesService } from './habilidades.service';
import { HabilidadesDTO } from './habilidades.dto';
export declare class HabilidadesController {
    private readonly habilidadesService;
    constructor(habilidadesService: HabilidadesService);
    private genericService;
    get(): Promise<Habilidades[]>;
    getById(id: number): Promise<Habilidades[]>;
    post(body: HabilidadesDTO): Promise<import("../responses").Response>;
    put(body: HabilidadesDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
