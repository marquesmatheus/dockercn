import { Connection } from 'typeorm';
import { GovernoLocal } from './governo-local.entity';

export const governoLocalProviders = [
  {
    provide: 'GOVERNO_LOCAL_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(GovernoLocal),
    inject: ['DATABASE_CONNECTION'],
  },
];
