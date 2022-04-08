import { RegimeProfissional } from './regime-profissional.entity';
import { RegimeProfissionalService } from './regime-profissional.service';
import { RegimeProfissionalDTO } from './regime-profissional.dto';
export declare class RegimeProfissionalController {
    private readonly regimeProfissionalService;
    constructor(regimeProfissionalService: RegimeProfissionalService);
    private genericService;
    get(): Promise<RegimeProfissional[]>;
    getById(id: number): Promise<RegimeProfissional[]>;
    post(body: RegimeProfissionalDTO): Promise<import("../responses").Response>;
    put(body: RegimeProfissionalDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
