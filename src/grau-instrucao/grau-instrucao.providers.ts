import { Connection } from 'typeorm';
import { GrauInstrucao } from './grau-instrucao.entity';

export const grauInstrucaoProviders = [
  {
    provide: 'GRAU_INSTRUCAO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(GrauInstrucao),
    inject: ['DATABASE_CONNECTION'],
  },
];
