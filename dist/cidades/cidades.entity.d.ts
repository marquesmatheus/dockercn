import { CidadesDTO } from './cidades.dto';
export declare class Cidades {
    id: number;
    nome: string;
    doEstado: number;
    init(body: CidadesDTO): Cidades;
}
