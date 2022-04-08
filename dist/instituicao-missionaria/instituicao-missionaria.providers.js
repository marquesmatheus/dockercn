"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instituicaoAtuacaoProviders = void 0;
const instituicao_missionaria_entity_1 = require("./instituicao-missionaria.entity");
exports.instituicaoAtuacaoProviders = [
    {
        provide: 'INSTITUICAO_ATUACAO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(instituicao_missionaria_entity_1.InstituicaoAtuacao),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=instituicao-missionaria.providers.js.map