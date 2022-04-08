import { Status } from './status.entity';
import { StatusService } from './status.service';
import { StatusDTO } from './status.dto';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    private genericService;
    get(): Promise<Status[]>;
    getById(id: number): Promise<Status[]>;
    post(body: StatusDTO): Promise<import("../responses").Response>;
    put(body: StatusDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
