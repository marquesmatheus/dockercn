import { GovernoLocal } from './governo-local.entity';
import { GovernoLocalService } from './governo-local.service';
import { GovernoLocalDTO } from './governo-local.dto';
export declare class GovernoLocalController {
    private readonly governoLocalService;
    constructor(governoLocalService: GovernoLocalService);
    private genericService;
    get(): Promise<GovernoLocal[]>;
    getById(id: number): Promise<GovernoLocal[]>;
    post(body: GovernoLocalDTO): Promise<import("../responses").Response>;
    put(body: GovernoLocalDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
