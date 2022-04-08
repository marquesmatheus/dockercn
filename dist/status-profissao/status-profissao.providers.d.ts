import { Connection } from 'typeorm';
import { StatusProfissao } from './status-profissao.entity';
export declare const statusProfissaoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<StatusProfissao>;
    inject: string[];
}[];
