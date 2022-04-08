import { Connection } from 'typeorm';
import { GovernoLocal } from './governo-local.entity';
export declare const governoLocalProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<GovernoLocal>;
    inject: string[];
}[];
