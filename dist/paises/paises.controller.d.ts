import { Paises } from './paises.entity';
import { PaisesService } from './paises.service';
import { PaisesDTO } from './paises.dto';
export declare class PaisesController {
    private readonly paisesService;
    constructor(paisesService: PaisesService);
    private genericService;
    get(): Promise<Paises[]>;
    getById(id: number): Promise<Paises[]>;
    post(body: PaisesDTO): Promise<import("../responses").Response>;
    put(body: PaisesDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
