import { Connection } from 'typeorm';
import { InstituicaoAtuacao } from './instituicao-missionaria.entity';

export const instituicaoAtuacaoProviders = [
  {
    provide: 'INSTITUICAO_ATUACAO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(InstituicaoAtuacao),
    inject: ['DATABASE_CONNECTION'],
  },
];
