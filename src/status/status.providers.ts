import { Connection } from 'typeorm';
import { Status } from './status.entity';

export const statusProviders = [
  {
    provide: 'STATUS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Status),
    inject: ['DATABASE_CONNECTION'],
  },
];
