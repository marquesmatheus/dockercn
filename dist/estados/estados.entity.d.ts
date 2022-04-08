import { EstadosDTO } from './estados.dto';
export declare class Estados {
    id: number;
    nome: string;
    doPais: number;
    init(body: EstadosDTO): Estados;
}
