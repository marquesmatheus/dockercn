"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const departamento_controller_1 = require("./departamento.controller");
const departamento_providers_1 = require("./departamento.providers");
const departamento_service_1 = require("./departamento.service");
let DepartamentoModule = class DepartamentoModule {
};
DepartamentoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [departamento_controller_1.DepartamentoController],
        providers: [...departamento_providers_1.departamentoProviders, departamento_service_1.DepartamentoService],
    })
], DepartamentoModule);
exports.DepartamentoModule = DepartamentoModule;
//# sourceMappingURL=departamento.module.js.map