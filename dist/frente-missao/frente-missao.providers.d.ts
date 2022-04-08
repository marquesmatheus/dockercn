import { Connection } from 'typeorm';
import { FrenteMissao } from './frente-missao.entity';
export declare const frenteMissaoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<FrenteMissao>;
    inject: string[];
}[];
