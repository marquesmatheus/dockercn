"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instituicaoEnsinoProviders = void 0;
const instituicao_ensino_entity_1 = require("./instituicao-ensino.entity");
exports.instituicaoEnsinoProviders = [
    {
        provide: 'INSTITUICAO_ENSINO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(instituicao_ensino_entity_1.InstituicaoEnsino),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=instituicao-ensino.providers.js.map