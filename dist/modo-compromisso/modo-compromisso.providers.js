"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modoCompromissoProviders = void 0;
const modo_compromisso_entity_1 = require("./modo-compromisso.entity");
exports.modoCompromissoProviders = [
    {
        provide: 'MODO_COMPROMISSO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(modo_compromisso_entity_1.ModoCompromisso),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=modo-compromisso.providers.js.map