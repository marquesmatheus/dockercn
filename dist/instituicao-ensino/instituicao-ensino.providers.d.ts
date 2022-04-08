import { Connection } from 'typeorm';
import { InstituicaoEnsino } from './instituicao-ensino.entity';
export declare const instituicaoEnsinoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<InstituicaoEnsino>;
    inject: string[];
}[];
