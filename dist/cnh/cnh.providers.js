"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnhProviders = void 0;
const cnh_entity_1 = require("./cnh.entity");
exports.cnhProviders = [
    {
        provide: 'CNH_REPOSITORY',
        useFactory: (connection) => connection.getRepository(cnh_entity_1.Cnh),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cnh.providers.js.map