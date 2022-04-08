import { Connection } from 'typeorm';
import { Habilidades } from './habilidades.entity';
export declare const habilidadesProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Habilidades>;
    inject: string[];
}[];
