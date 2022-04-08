import { StatusProfissaoDTO } from './status-profissao.dto';
export declare class StatusProfissao {
    id: number;
    status: string;
    init(body: StatusProfissaoDTO): StatusProfissao;
}
