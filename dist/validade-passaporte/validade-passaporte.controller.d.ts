import { ValidadePassaporte } from './validade-passaporte.entity';
import { ValidadePassaporteService } from './validade-passaporte.service';
import { ValidadePassaporteDTO } from './validade-passaporte.dto';
export declare class ValidadePassaporteController {
    private readonly validadePassaporteService;
    constructor(validadePassaporteService: ValidadePassaporteService);
    private genericService;
    get(): Promise<ValidadePassaporte[]>;
    getById(id: number): Promise<ValidadePassaporte[]>;
    post(body: ValidadePassaporteDTO): Promise<import("../responses").Response>;
    put(body: ValidadePassaporteDTO): Promise<import("../responses").Response>;
    delete(id: number): Promise<import("../responses").Response>;
}
