"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusProviders = void 0;
const status_entity_1 = require("./status.entity");
exports.statusProviders = [
    {
        provide: 'STATUS_REPOSITORY',
        useFactory: (connection) => connection.getRepository(status_entity_1.Status),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=status.providers.js.map