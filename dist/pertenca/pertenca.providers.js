"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pertencaProviders = void 0;
const pertenca_entity_1 = require("./pertenca.entity");
exports.pertencaProviders = [
    {
        provide: 'PERTENCA_REPOSITORY',
        useFactory: (connection) => connection.getRepository(pertenca_entity_1.Pertenca),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=pertenca.providers.js.map