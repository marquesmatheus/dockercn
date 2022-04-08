import { FrenteMissaoDTO } from './frente-missao.dto';
export declare class FrenteMissao {
    id: number;
    missao: string;
    idCidade: number;
    init(body: FrenteMissaoDTO): FrenteMissao;
}
