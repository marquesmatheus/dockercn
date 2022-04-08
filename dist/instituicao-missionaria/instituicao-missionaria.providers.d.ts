import { Connection } from 'typeorm';
import { InstituicaoAtuacao } from './instituicao-missionaria.entity';
export declare const instituicaoAtuacaoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<InstituicaoAtuacao>;
    inject: string[];
}[];
