import { Connection } from 'typeorm';
import { StatusProfissao } from './status-profissao.entity';

export const statusProfissaoProviders = [
  {
    provide: 'STATUS_PROFISSAO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(StatusProfissao),
    inject: ['DATABASE_CONNECTION'],
  },
];
