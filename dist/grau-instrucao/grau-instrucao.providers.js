"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grauInstrucaoProviders = void 0;
const grau_instrucao_entity_1 = require("./grau-instrucao.entity");
exports.grauInstrucaoProviders = [
    {
        provide: 'GRAU_INSTRUCAO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(grau_instrucao_entity_1.GrauInstrucao),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=grau-instrucao.providers.js.map