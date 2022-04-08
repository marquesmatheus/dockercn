import { InstituicaoEnsino } from './instituicao-ensino.entity';
import { InstituicaoEnsinoService } from './instituicao-ensino.service';
import { InstituicaoEnsinoDTO } from './instituicao-ensino.dto';
export declare class InstituicaoEnsinoController {
    private readonly instituicaoEnsinoService;
    constructor(instituicaoEnsinoService: InstituicaoEnsinoService);
    private genericService;
    get(): Promise<InstituicaoEnsino[]>;
    getById(id: number): Promise<InstituicaoEnsino[]>;
    post(body: InstituicaoEnsinoDTO): Promise<import("../responses").Response>;
    put(body: InstituicaoEnsinoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
