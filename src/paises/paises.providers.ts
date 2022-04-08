import { Connection } from 'typeorm';
import { Paises } from './paises.entity';

export const paisesProviders = [
  {
    provide: 'PAISES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Paises),
    inject: ['DATABASE_CONNECTION'],
  },
];
