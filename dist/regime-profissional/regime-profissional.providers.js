"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regimeProfissionalProviders = void 0;
const regime_profissional_entity_1 = require("./regime-profissional.entity");
exports.regimeProfissionalProviders = [
    {
        provide: 'REGIME_PROFISSIONAL_REPOSITORY',
        useFactory: (connection) => connection.getRepository(regime_profissional_entity_1.RegimeProfissional),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=regime-profissional.providers.js.map