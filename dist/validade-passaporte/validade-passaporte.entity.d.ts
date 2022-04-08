import { ValidadePassaporteDTO } from './validade-passaporte.dto';
export declare class ValidadePassaporte {
    id: number;
    validade: string;
    init(body: ValidadePassaporteDTO): ValidadePassaporte;
}
