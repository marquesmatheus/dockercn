import { EstadoCivilDTO } from './estado-civil.dto';
export declare class EstadoCivil {
    id: number;
    estado: string;
    init(body: EstadoCivilDTO): EstadoCivil;
}
