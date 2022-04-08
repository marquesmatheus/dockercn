"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargosConselhoProviders = void 0;
const cargos_conselho_entity_1 = require("./cargos-conselho.entity");
exports.cargosConselhoProviders = [
    {
        provide: 'CARGOS_CONSELHO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(cargos_conselho_entity_1.CargosConselho),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=cargos-conselho.providers.js.map