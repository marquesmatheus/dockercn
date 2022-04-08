import { Connection } from 'typeorm';
import { Paises } from './paises.entity';
export declare const paisesProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Paises>;
    inject: string[];
}[];
