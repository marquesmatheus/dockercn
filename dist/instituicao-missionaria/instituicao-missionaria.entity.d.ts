import { InstituicaoAtuacaoDTO } from './instituicao-missionaria.dto';
export declare class InstituicaoAtuacao {
    id: number;
    instituicao: string;
    init(body: InstituicaoAtuacaoDTO): InstituicaoAtuacao;
}
