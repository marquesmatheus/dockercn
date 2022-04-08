import { Connection } from 'typeorm';
import { ValidadePassaporte } from './validade-passaporte.entity';
export declare const validadePassaporteProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<ValidadePassaporte>;
    inject: string[];
}[];
