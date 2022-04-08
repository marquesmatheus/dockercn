import { Connection } from 'typeorm';
import { Estados } from './estados.entity';

export const estadosProviders = [
  {
    provide: 'ESTADOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Estados),
    inject: ['DATABASE_CONNECTION'],
  },
];
