"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.habilidadesProviders = void 0;
const habilidades_entity_1 = require("./habilidades.entity");
exports.habilidadesProviders = [
    {
        provide: 'HABILIDADES_REPOSITORY',
        useFactory: (connection) => connection.getRepository(habilidades_entity_1.Habilidades),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=habilidades.providers.js.map