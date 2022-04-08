import { Connection } from 'typeorm';
import { Membro } from './membro.entity';

export const membroProviders = [
  {
    provide: 'MEMBRO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Membro),
    inject: ['DATABASE_CONNECTION'],
  },
];
