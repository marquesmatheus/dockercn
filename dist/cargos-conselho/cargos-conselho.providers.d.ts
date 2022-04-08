import { Connection } from 'typeorm';
import { CargosConselho } from './cargos-conselho.entity';
export declare const cargosConselhoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<CargosConselho>;
    inject: string[];
}[];
