import { StatusDTO } from './status.dto';
export declare class Status {
    id: number;
    status: string;
    init(body: StatusDTO): Status;
}
