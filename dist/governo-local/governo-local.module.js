"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovernoLocalModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const governo_local_controller_1 = require("./governo-local.controller");
const governo_local_providers_1 = require("./governo-local.providers");
const governo_local_service_1 = require("./governo-local.service");
let GovernoLocalModule = class GovernoLocalModule {
};
GovernoLocalModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [governo_local_controller_1.GovernoLocalController],
        providers: [...governo_local_providers_1.governoLocalProviders, governo_local_service_1.GovernoLocalService],
    })
], GovernoLocalModule);
exports.GovernoLocalModule = GovernoLocalModule;
//# sourceMappingURL=governo-local.module.js.map