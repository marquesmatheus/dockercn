import { Connection } from 'typeorm';
import { AfastamentoTemporario } from './afastamento-temporario.entity';
export declare const afastamentoTemporarioProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<AfastamentoTemporario>;
    inject: string[];
}[];
