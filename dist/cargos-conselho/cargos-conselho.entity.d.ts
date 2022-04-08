import { CargosConselhoDTO } from './cargos-conselho.dto';
export declare class CargosConselho {
    id: number;
    cargo: string;
    init(body: CargosConselhoDTO): CargosConselho;
}
