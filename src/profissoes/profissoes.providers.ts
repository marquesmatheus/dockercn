import { Connection } from 'typeorm';
import { Profissoes } from './profissoes.entity';

export const profissoesProviders = [
  {
    provide: 'PROFISSOES_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Profissoes),
    inject: ['DATABASE_CONNECTION'],
  },
];
