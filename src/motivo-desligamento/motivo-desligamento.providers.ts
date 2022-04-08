import { Connection } from 'typeorm';
import { MotivoDesligamento } from './motivo-desligamento.entity';

export const motivoDesligamentoProviders = [
  {
    provide: 'MOTIVO_DESLIGAMENTO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(MotivoDesligamento),
    inject: ['DATABASE_CONNECTION'],
  },
];
