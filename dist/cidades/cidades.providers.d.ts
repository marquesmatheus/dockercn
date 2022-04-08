import { Connection } from 'typeorm';
import { Cidades } from './cidades.entity';
export declare const cidadesProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Cidades>;
    inject: string[];
}[];
