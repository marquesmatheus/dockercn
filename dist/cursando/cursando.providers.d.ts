import { Connection } from 'typeorm';
import { Cursando } from './cursando.entity';
export declare const cursandoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Cursando>;
    inject: string[];
}[];
