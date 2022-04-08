import { InstituicaoEnsinoDTO } from './instituicao-ensino.dto';
export declare class InstituicaoEnsino {
    id: number;
    instituicao: string;
    init(body: InstituicaoEnsinoDTO): InstituicaoEnsino;
}
