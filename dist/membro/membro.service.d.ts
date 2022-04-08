import { Repository } from 'typeorm';
import { Membro } from './membro.entity';
export declare class MembroService {
    private membroRepository;
    constructor(membroRepository: Repository<Membro>);
    getinstance(): Repository<Membro>;
    getInfo(): Promise<Membro[]>;
}
