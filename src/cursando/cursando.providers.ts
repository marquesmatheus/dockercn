import { Connection } from 'typeorm';
import { Cursando } from './cursando.entity';

export const cursandoProviders = [
  {
    provide: 'CURSANDO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cursando),
    inject: ['DATABASE_CONNECTION'],
  },
];
