"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadosProviders = void 0;
const estados_entity_1 = require("./estados.entity");
exports.estadosProviders = [
    {
        provide: 'ESTADOS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(estados_entity_1.Estados),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=estados.providers.js.map