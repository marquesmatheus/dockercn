import { Connection } from 'typeorm';
import { GrauInstrucao } from './grau-instrucao.entity';
export declare const grauInstrucaoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<GrauInstrucao>;
    inject: string[];
}[];
