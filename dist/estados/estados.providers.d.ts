import { Connection } from 'typeorm';
import { Estados } from './estados.entity';
export declare const estadosProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Estados>;
    inject: string[];
}[];
