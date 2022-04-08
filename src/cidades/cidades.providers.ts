import { Connection } from 'typeorm';
import { Cidades } from './cidades.entity';

export const cidadesProviders = [
  {
    provide: 'CIDADES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Cidades),
    inject: ['DATABASE_CONNECTION'],
  },
];
