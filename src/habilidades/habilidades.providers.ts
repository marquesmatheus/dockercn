import { Connection } from 'typeorm';
import { Habilidades } from './habilidades.entity';

export const habilidadesProviders = [
  {
    provide: 'HABILIDADES_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(Habilidades),
    inject: ['DATABASE_CONNECTION'],
  },
];
