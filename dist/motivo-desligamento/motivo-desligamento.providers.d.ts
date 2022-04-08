import { Connection } from 'typeorm';
import { MotivoDesligamento } from './motivo-desligamento.entity';
export declare const motivoDesligamentoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<MotivoDesligamento>;
    inject: string[];
}[];
