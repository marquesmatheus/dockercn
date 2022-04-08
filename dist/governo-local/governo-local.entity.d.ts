import { GovernoLocalDTO } from './governo-local.dto';
export declare class GovernoLocal {
    id: number;
    cargo: string;
    init(body: GovernoLocalDTO): GovernoLocal;
}
