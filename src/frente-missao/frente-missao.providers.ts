import { Connection } from 'typeorm';
import { FrenteMissao } from './frente-missao.entity';

export const frenteMissaoProviders = [
  {
    provide: 'FRENTE_MISSAO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(FrenteMissao),
    inject: ['DATABASE_CONNECTION'],
  },
];
