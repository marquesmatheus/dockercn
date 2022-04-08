"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadePassaporteProviders = void 0;
const validade_passaporte_entity_1 = require("./validade-passaporte.entity");
exports.validadePassaporteProviders = [
    {
        provide: 'VALIDADE_PASSAPORTE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(validade_passaporte_entity_1.ValidadePassaporte),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=validade-passaporte.providers.js.map