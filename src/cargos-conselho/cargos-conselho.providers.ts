import { Connection } from 'typeorm';
import { CargosConselho } from './cargos-conselho.entity';

export const cargosConselhoProviders = [
  {
    provide: 'CARGOS_CONSELHO_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(CargosConselho),
    inject: ['DATABASE_CONNECTION'],
  },
];
