"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grauPertencaProviders = void 0;
const grau_pertenca_entity_1 = require("./grau-pertenca.entity");
exports.grauPertencaProviders = [
    {
        provide: 'GRAU_PERTENCA_REPOSITORY',
        useFactory: (connection) => connection.getRepository(grau_pertenca_entity_1.GrauPertenca),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=grau-pertenca.providers.js.map