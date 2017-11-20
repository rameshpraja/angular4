"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // NgModel lives here
var http_1 = require("@angular/http");
var angular_star_rating_1 = require("angular-star-rating");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var post_service_1 = require("./services/post.service");
var list_component_1 = require("./components/list/list.component");
var login_component_1 = require("./components/login/login.component");
var login_service_1 = require("./services/login.service");
var loader_service_1 = require("./services/loader.service");
var alert_service_1 = require("./services/alert.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            angular_star_rating_1.StarRatingModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            list_component_1.ListComponent,
            login_component_1.LoginComponent
        ],
        providers: [
            post_service_1.PostService,
            login_service_1.LoginService,
            loader_service_1.LoaderService,
            alert_service_1.AlertService,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map