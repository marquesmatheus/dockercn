import { Connection } from 'typeorm';
import { Membro } from './membro.entity';
export declare const membroProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Membro>;
    inject: string[];
}[];
