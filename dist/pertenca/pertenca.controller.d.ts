import { Pertenca } from './pertenca.entity';
import { PertencaService } from './pertenca.service';
import { PertencaDTO } from './pertenca.dto';
export declare class PertencaController {
    private readonly pertencaService;
    constructor(pertencaService: PertencaService);
    private genericService;
    get(): Promise<Pertenca[]>;
    getById(id: number): Promise<Pertenca[]>;
    post(body: PertencaDTO): Promise<import("../responses").Response>;
    put(body: PertencaDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
