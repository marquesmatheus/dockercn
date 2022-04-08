"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrauPertencaModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const grau_pertenca_controller_1 = require("./grau-pertenca.controller");
const grau_pertenca_providers_1 = require("./grau-pertenca.providers");
const grau_pertenca_service_1 = require("./grau-pertenca.service");
let GrauPertencaModule = class GrauPertencaModule {
};
GrauPertencaModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [grau_pertenca_controller_1.GrauPertencaController],
        providers: [...grau_pertenca_providers_1.grauPertencaProviders, grau_pertenca_service_1.GrauPertencaService],
    })
], GrauPertencaModule);
exports.GrauPertencaModule = GrauPertencaModule;
//# sourceMappingURL=grau-pertenca.module.js.map