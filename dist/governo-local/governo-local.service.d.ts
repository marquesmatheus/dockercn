import { Repository } from 'typeorm';
import { GovernoLocal } from './governo-local.entity';
export declare class GovernoLocalService {
    private governoLocalRepository;
    constructor(governoLocalRepository: Repository<GovernoLocal>);
    getinstance(): Repository<GovernoLocal>;
}
