import { InstituicaoAtuacao } from './instituicao-missionaria.entity';
import { InstituicaoAtuacaoService } from './instituicao-missionaria.service';
import { InstituicaoAtuacaoDTO } from './instituicao-missionaria.dto';
export declare class InstituicaoAtuacaoController {
    private readonly instituicaoAtuacaoService;
    constructor(instituicaoAtuacaoService: InstituicaoAtuacaoService);
    private genericService;
    get(): Promise<InstituicaoAtuacao[]>;
    getById(id: number): Promise<InstituicaoAtuacao[]>;
    post(body: InstituicaoAtuacaoDTO): Promise<import("../responses").Response>;
    put(body: InstituicaoAtuacaoDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
