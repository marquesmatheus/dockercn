import { Estados } from './estados.entity';
import { EstadosService } from './estados.service';
import { EstadosDTO } from './estados.dto';
export declare class EstadosController {
    private readonly estadosService;
    constructor(estadosService: EstadosService);
    private genericService;
    get(): Promise<Estados[]>;
    getInfo(): Promise<Estados[]>;
    getById(id: number): Promise<Estados[]>;
    getInfoById(id: number): Promise<Estados>;
    getEstadosDoPais(id: number): Promise<Estados[]>;
    post(body: EstadosDTO): Promise<import("../responses").Response>;
    put(body: EstadosDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
