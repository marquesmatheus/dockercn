import { GrauInstrucao } from './grau-instrucao.entity';
import { GrauInstrucaoService } from './grau-instrucao.service';
import { GrauInstrucaoDTO } from './grau-instrucao.dto';
export declare class GrauInstrucaoController {
    private readonly grauInstrucaoService;
    constructor(grauInstrucaoService: GrauInstrucaoService);
    private genericService;
    get(): Promise<GrauInstrucao[]>;
    getById(id: number): Promise<GrauInstrucao[]>;
    post(body: GrauInstrucaoDTO): Promise<import("../responses").Response>;
    put(body: GrauInstrucaoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
