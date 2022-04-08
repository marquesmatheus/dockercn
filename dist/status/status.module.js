"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const status_controller_1 = require("./status.controller");
const status_providers_1 = require("./status.providers");
const status_service_1 = require("./status.service");
let StatusModule = class StatusModule {
};
StatusModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [status_controller_1.StatusController],
        providers: [...status_providers_1.statusProviders, status_service_1.StatusService],
    })
], StatusModule);
exports.StatusModule = StatusModule;
//# sourceMappingURL=status.module.js.map