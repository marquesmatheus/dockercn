"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.membroProviders = void 0;
const membro_entity_1 = require("./membro.entity");
exports.membroProviders = [
    {
        provide: 'MEMBRO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(membro_entity_1.Membro),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=membro.providers.js.map