"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paisesProviders = void 0;
const paises_entity_1 = require("./paises.entity");
exports.paisesProviders = [
    {
        provide: 'PAISES_REPOSITORY',
        useFactory: (connection) => connection.getRepository(paises_entity_1.Paises),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=paises.providers.js.map