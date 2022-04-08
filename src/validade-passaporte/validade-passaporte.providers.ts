import { Connection } from 'typeorm';
import { ValidadePassaporte } from './validade-passaporte.entity';

export const validadePassaporteProviders = [
  {
    provide: 'VALIDADE_PASSAPORTE_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(ValidadePassaporte),
    inject: ['DATABASE_CONNECTION'],
  },
];
