"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frenteMissaoProviders = void 0;
const frente_missao_entity_1 = require("./frente-missao.entity");
exports.frenteMissaoProviders = [
    {
        provide: 'FRENTE_MISSAO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(frente_missao_entity_1.FrenteMissao),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=frente-missao.providers.js.map