"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profissoesProviders = void 0;
const profissoes_entity_1 = require("./profissoes.entity");
exports.profissoesProviders = [
    {
        provide: 'PROFISSOES_REPOSITORY',
        useFactory: (connection) => connection.getRepository(profissoes_entity_1.Profissoes),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=profissoes.providers.js.map