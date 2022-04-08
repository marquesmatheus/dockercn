import { ProfissoesDTO } from './profissoes.dto';
export declare class Profissoes {
    id: number;
    profissao: string;
    init(body: ProfissoesDTO): Profissoes;
}
