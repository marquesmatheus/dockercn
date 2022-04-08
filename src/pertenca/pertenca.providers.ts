import { Connection } from 'typeorm';
import { Pertenca } from './pertenca.entity';

export const pertencaProviders = [
  {
    provide: 'PERTENCA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Pertenca),
    inject: ['DATABASE_CONNECTION'],
  },
];
