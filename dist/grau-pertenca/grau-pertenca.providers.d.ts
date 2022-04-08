import { Connection } from 'typeorm';
import { GrauPertenca } from './grau-pertenca.entity';
export declare const grauPertencaProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<GrauPertenca>;
    inject: string[];
}[];
