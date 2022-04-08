import { GrauPertenca } from './grau-pertenca.entity';
import { GrauPertencaService } from './grau-pertenca.service';
import { GrauPertencaDTO } from './grau-pertenca.dto';
export declare class GrauPertencaController {
    private readonly grauPertencaService;
    constructor(grauPertencaService: GrauPertencaService);
    private genericService;
    get(): Promise<GrauPertenca[]>;
    getById(id: number): Promise<GrauPertenca[]>;
    post(body: GrauPertencaDTO): Promise<import("../responses").Response>;
    put(body: GrauPertencaDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
