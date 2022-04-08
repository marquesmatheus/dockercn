import { CargosConselho } from './cargos-conselho.entity';
import { CargosConselhoService } from './cargos-conselho.service';
import { CargosConselhoDTO } from './cargos-conselho.dto';
export declare class CargosConselhoController {
    private readonly cargosConselhoService;
    constructor(cargosConselhoService: CargosConselhoService);
    private genericService;
    get(): Promise<CargosConselho[]>;
    getById(id: number): Promise<CargosConselho[]>;
    post(body: CargosConselhoDTO): Promise<import("../responses").Response>;
    put(body: CargosConselhoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
