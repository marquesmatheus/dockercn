import { Connection } from 'typeorm';
import { Cnh } from './cnh.entity';

export const cnhProviders = [
  {
    provide: 'CNH_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cnh),
    inject: ['DATABASE_CONNECTION'],
  },
];
