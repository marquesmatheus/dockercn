import { EstadoCivil } from './estado-civil.entity';
import { EstadoCivilService } from './estado-civil.service';
import { EstadoCivilDTO } from './estado-civil.dto';
export declare class EstadoCivilController {
    private readonly estadoCivilService;
    constructor(estadoCivilService: EstadoCivilService);
    private genericService;
    get(): Promise<EstadoCivil[]>;
    getById(id: number): Promise<EstadoCivil[]>;
    post(body: EstadoCivilDTO): Promise<import("../responses").Response>;
    put(body: EstadoCivilDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
