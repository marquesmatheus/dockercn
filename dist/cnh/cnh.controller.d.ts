import { Cnh } from './cnh.entity';
import { CnhService } from './cnh.service';
import { CnhDTO } from './cnh.dto';
export declare class CnhController {
    private readonly cnhService;
    constructor(cnhService: CnhService);
    private genericService;
    get(): Promise<Cnh[]>;
    getById(id: number): Promise<Cnh[]>;
    post(body: CnhDTO): Promise<import("../responses").Response>;
    put(body: CnhDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
