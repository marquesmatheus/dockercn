import { Connection } from 'typeorm';
import { ModoCompromisso } from './modo-compromisso.entity';
export declare const modoCompromissoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<ModoCompromisso>;
    inject: string[];
}[];
