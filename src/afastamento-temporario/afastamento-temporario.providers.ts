import { Connection } from 'typeorm';
import { AfastamentoTemporario } from './afastamento-temporario.entity';

export const afastamentoTemporarioProviders = [
  {
    provide: 'AFASTAMENTO_TEMPORARIO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(AfastamentoTemporario),
    inject: ['DATABASE_CONNECTION'],
  },
];
