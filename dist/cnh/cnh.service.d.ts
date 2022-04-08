import { Repository } from 'typeorm';
import { Cnh } from './cnh.entity';
export declare class CnhService {
    private cnhRepository;
    constructor(cnhRepository: Repository<Cnh>);
    getinstance(): Repository<Cnh>;
}
