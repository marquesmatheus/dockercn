"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motivoDesligamentoProviders = void 0;
const motivo_desligamento_entity_1 = require("./motivo-desligamento.entity");
exports.motivoDesligamentoProviders = [
    {
        provide: 'MOTIVO_DESLIGAMENTO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(motivo_desligamento_entity_1.MotivoDesligamento),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=motivo-desligamento.providers.js.map