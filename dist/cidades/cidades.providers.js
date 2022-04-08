"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cidadesProviders = void 0;
const cidades_entity_1 = require("./cidades.entity");
exports.cidadesProviders = [
    {
        provide: 'CIDADES_REPOSITORY',
        useFactory: (connection) => connection.getRepository(cidades_entity_1.Cidades),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cidades.providers.js.map