"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cursandoProviders = void 0;
const cursando_entity_1 = require("./cursando.entity");
exports.cursandoProviders = [
    {
        provide: 'CURSANDO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(cursando_entity_1.Cursando),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cursando.providers.js.map