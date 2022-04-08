import { Connection } from 'typeorm';
import { InstituicaoEnsino } from './instituicao-ensino.entity';

export const instituicaoEnsinoProviders = [
  {
    provide: 'INSTITUICAO_ENSINO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(InstituicaoEnsino),
    inject: ['DATABASE_CONNECTION'],
  },
];
