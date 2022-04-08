import { CursandoDTO } from './cursando.dto';
export declare class Cursando {
    id: number;
    curso: string;
    init(body: CursandoDTO): Cursando;
}
