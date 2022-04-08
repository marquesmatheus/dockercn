import { Membro } from './membro.entity';
import { MembroService } from './membro.service';
import { MembroDTO } from './membro.dto';
export declare class MembroController {
    private readonly membroService;
    constructor(membroService: MembroService);
    private genericService;
    get(): Promise<Membro[]>;
    getInfo(): Promise<Membro[]>;
    getById(id: number): Promise<Membro[]>;
    post(body: MembroDTO): Promise<import("../responses").Response>;
    put(body: MembroDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
