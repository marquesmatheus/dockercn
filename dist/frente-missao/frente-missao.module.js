"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrenteMissaoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const frente_missao_controller_1 = require("./frente-missao.controller");
const frente_missao_providers_1 = require("./frente-missao.providers");
const frente_missao_service_1 = require("./frente-missao.service");
let FrenteMissaoModule = class FrenteMissaoModule {
};
FrenteMissaoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [frente_missao_controller_1.FrenteMissaoController],
        providers: [...frente_missao_providers_1.frenteMissaoProviders, frente_missao_service_1.FrenteMissaoService],
    })
], FrenteMissaoModule);
exports.FrenteMissaoModule = FrenteMissaoModule;
//# sourceMappingURL=frente-missao.module.js.map