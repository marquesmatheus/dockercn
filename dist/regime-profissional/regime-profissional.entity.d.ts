import { RegimeProfissionalDTO } from './regime-profissional.dto';
export declare class RegimeProfissional {
    id: number;
    regime: string;
    init(body: RegimeProfissionalDTO): RegimeProfissional;
}
