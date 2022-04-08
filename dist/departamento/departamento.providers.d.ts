import { Connection } from 'typeorm';
import { Departamento } from './departamento.entity';
export declare const departamentoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Departamento>;
    inject: string[];
}[];
