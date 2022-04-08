import { Connection } from 'typeorm';
import { Cnh } from './cnh.entity';
export declare const cnhProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Cnh>;
    inject: string[];
}[];
