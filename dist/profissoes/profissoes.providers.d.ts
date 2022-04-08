import { Connection } from 'typeorm';
import { Profissoes } from './profissoes.entity';
export declare const profissoesProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Profissoes>;
    inject: string[];
}[];
