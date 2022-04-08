import { Repository } from 'typeorm';
import { Cursando } from './cursando.entity';
export declare class CursandoService {
    private cursandoRepository;
    constructor(cursandoRepository: Repository<Cursando>);
    getinstance(): Repository<Cursando>;
}
