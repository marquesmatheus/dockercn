"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrauInstrucaoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const grau_instrucao_controller_1 = require("./grau-instrucao.controller");
const grau_instrucao_providers_1 = require("./grau-instrucao.providers");
const grau_instrucao_service_1 = require("./grau-instrucao.service");
let GrauInstrucaoModule = class GrauInstrucaoModule {
};
GrauInstrucaoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [grau_instrucao_controller_1.GrauInstrucaoController],
        providers: [...grau_instrucao_providers_1.grauInstrucaoProviders, grau_instrucao_service_1.GrauInstrucaoService],
    })
], GrauInstrucaoModule);
exports.GrauInstrucaoModule = GrauInstrucaoModule;
//# sourceMappingURL=grau-instrucao.module.js.map