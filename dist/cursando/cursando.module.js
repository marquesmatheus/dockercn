"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursandoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const cursando_controller_1 = require("./cursando.controller");
const cursando_providers_1 = require("./cursando.providers");
const cursando_service_1 = require("./cursando.service");
let CursandoModule = class CursandoModule {
};
CursandoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [cursando_controller_1.CursandoController],
        providers: [...cursando_providers_1.cursandoProviders, cursando_service_1.CursandoService],
    })
], CursandoModule);
exports.CursandoModule = CursandoModule;
//# sourceMappingURL=cursando.module.js.map