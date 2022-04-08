import { Connection } from 'typeorm';
import { Departamento } from './departamento.entity';

export const departamentoProviders = [
  {
    provide: 'DEPARTAMENTO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Departamento),
    inject: ['DATABASE_CONNECTION'],
  },
];
