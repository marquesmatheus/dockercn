import { Connection } from 'typeorm';
import { EstadoCivil } from './estado-civil.entity';

export const estadoCivilProviders = [
  {
    provide: 'ESTADO_CIVIL_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(EstadoCivil),
    inject: ['DATABASE_CONNECTION'],
  },
];
