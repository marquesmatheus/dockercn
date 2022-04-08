import { Connection } from 'typeorm';
import { Pertenca } from './pertenca.entity';
export declare const pertencaProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Pertenca>;
    inject: string[];
}[];
