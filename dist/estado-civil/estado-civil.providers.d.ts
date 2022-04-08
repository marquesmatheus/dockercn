import { Connection } from 'typeorm';
import { EstadoCivil } from './estado-civil.entity';
export declare const estadoCivilProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<EstadoCivil>;
    inject: string[];
}[];
