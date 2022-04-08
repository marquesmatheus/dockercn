import { Departamento } from './departamento.entity';
import { DepartamentoService } from './departamento.service';
import { DepartamentoDTO } from './departamento.dto';
export declare class DepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    private genericService;
    get(): Promise<Departamento[]>;
    getById(id: number): Promise<Departamento[]>;
    post(body: DepartamentoDTO): Promise<import("../responses").Response>;
    put(body: DepartamentoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
