import { DepartamentoDTO } from './departamento.dto';
export declare class Departamento {
    id: number;
    departamento: string;
    init(body: DepartamentoDTO): Departamento;
}
