import { GrauInstrucaoDTO } from './grau-instrucao.dto';
export declare class GrauInstrucao {
    id: number;
    grau: string;
    init(body: GrauInstrucaoDTO): GrauInstrucao;
}
