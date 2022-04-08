import { Connection } from 'typeorm';
import { GrauPertenca } from './grau-pertenca.entity';

export const grauPertencaProviders = [
  {
    provide: 'GRAU_PERTENCA_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(GrauPertenca),
    inject: ['DATABASE_CONNECTION'],
  },
];
