import { Repository } from 'typeorm';
import { Status } from './status.entity';
export declare class StatusService {
    private statusRepository;
    constructor(statusRepository: Repository<Status>);
    getinstance(): Repository<Status>;
}
