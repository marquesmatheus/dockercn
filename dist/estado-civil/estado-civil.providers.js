"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadoCivilProviders = void 0;
const estado_civil_entity_1 = require("./estado-civil.entity");
exports.estadoCivilProviders = [
    {
        provide: 'ESTADO_CIVIL_REPOSITORY',
        useFactory: (connection) => connection.getRepository(estado_civil_entity_1.EstadoCivil),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=estado-civil.providers.js.map