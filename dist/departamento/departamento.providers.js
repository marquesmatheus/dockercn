"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departamentoProviders = void 0;
const departamento_entity_1 = require("./departamento.entity");
exports.departamentoProviders = [
    {
        provide: 'DEPARTAMENTO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(departamento_entity_1.Departamento),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=departamento.providers.js.map