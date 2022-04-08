"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusProfissaoProviders = void 0;
const status_profissao_entity_1 = require("./status-profissao.entity");
exports.statusProfissaoProviders = [
    {
        provide: 'STATUS_PROFISSAO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(status_profissao_entity_1.StatusProfissao),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=status-profissao.providers.js.map