import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: 'secret', // $#q1#w2#e3#$
        database: 'sgm',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // ATENÇÃO: em produção precisa ser FALSE
      }),
  },
];
