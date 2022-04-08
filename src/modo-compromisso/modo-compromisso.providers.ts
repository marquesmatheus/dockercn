import { Connection } from 'typeorm';
import { ModoCompromisso } from './modo-compromisso.entity';

export const modoCompromissoProviders = [
  {
    provide: 'MODO_COMPROMISSO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(ModoCompromisso),
    inject: ['DATABASE_CONNECTION'],
  },
];
