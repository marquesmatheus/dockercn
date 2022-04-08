import { Connection } from 'typeorm';
import { RegimeProfissional } from './regime-profissional.entity';

export const regimeProfissionalProviders = [
  {
    provide: 'REGIME_PROFISSIONAL_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(RegimeProfissional),
    inject: ['DATABASE_CONNECTION'],
  },
];
