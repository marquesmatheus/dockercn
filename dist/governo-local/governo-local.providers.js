"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.governoLocalProviders = void 0;
const governo_local_entity_1 = require("./governo-local.entity");
exports.governoLocalProviders = [
    {
        provide: 'GOVERNO_LOCAL_REPOSITORY',
        useFactory: (connection) => connection.getRepository(governo_local_entity_1.GovernoLocal),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=governo-local.providers.js.map