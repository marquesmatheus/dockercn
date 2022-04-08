"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusProfissaoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const status_profissao_controller_1 = require("./status-profissao.controller");
const status_profissao_providers_1 = require("./status-profissao.providers");
const status_profissao_service_1 = require("./status-profissao.service");
let StatusProfissaoModule = class StatusProfissaoModule {
};
StatusProfissaoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [status_profissao_controller_1.StatusProfissaoController],
        providers: [...status_profissao_providers_1.statusProfissaoProviders, status_profissao_service_1.StatusProfissaoService],
    })
], StatusProfissaoModule);
exports.StatusProfissaoModule = StatusProfissaoModule;
//# sourceMappingURL=status-profissao.module.js.map