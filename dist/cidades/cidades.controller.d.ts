import { Cidades } from './cidades.entity';
import { CidadesService } from './cidades.service';
import { CidadesDTO } from './cidades.dto';
export declare class CidadesController {
    private readonly cidadesService;
    constructor(cidadesService: CidadesService);
    private genericService;
    get(): Promise<Cidades[]>;
    getInfo(): Promise<Cidades[]>;
    getById(id: number): Promise<Cidades[]>;
    getInfoById(id: number): Promise<Cidades>;
    getCidadesDoEstado(id: number): Promise<Cidades[]>;
    post(body: CidadesDTO): Promise<import("../responses").Response>;
    put(body: CidadesDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
