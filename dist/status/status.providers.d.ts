import { Connection } from 'typeorm';
import { Status } from './status.entity';
export declare const statusProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Status>;
    inject: string[];
}[];
