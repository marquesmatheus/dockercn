"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargosConselhoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const cargos_conselho_controller_1 = require("./cargos-conselho.controller");
const cargos_conselho_providers_1 = require("./cargos-conselho.providers");
const cargos_conselho_service_1 = require("./cargos-conselho.service");
let CargosConselhoModule = class CargosConselhoModule {
};
CargosConselhoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [cargos_conselho_controller_1.CargosConselhoController],
        providers: [...cargos_conselho_providers_1.cargosConselhoProviders, cargos_conselho_service_1.CargosConselhoService],
    })
], CargosConselhoModule);
exports.CargosConselhoModule = CargosConselhoModule;
//# sourceMappingURL=cargos-conselho.module.js.map