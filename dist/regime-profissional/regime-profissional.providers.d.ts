import { Connection } from 'typeorm';
import { RegimeProfissional } from './regime-profissional.entity';
export declare const regimeProfissionalProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<RegimeProfissional>;
    inject: string[];
}[];
