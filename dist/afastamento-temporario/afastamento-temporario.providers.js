"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afastamentoTemporarioProviders = void 0;
const afastamento_temporario_entity_1 = require("./afastamento-temporario.entity");
exports.afastamentoTemporarioProviders = [
    {
        provide: 'AFASTAMENTO_TEMPORARIO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(afastamento_temporario_entity_1.AfastamentoTemporario),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=afastamento-temporario.providers.js.map