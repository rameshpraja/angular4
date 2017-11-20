"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var login_service_1 = require("../../services/login.service");
var loader_service_1 = require("../../services/loader.service");
var LoginComponent = (function () {
    function LoginComponent(_LoginService, location, route, loaderService, router) {
        this._LoginService = _LoginService;
        this.location = location;
        this.route = route;
        this.loaderService = loaderService;
        this.router = router;
        this.model = {};
        this.name = 'Angular Login page';
        this.loading = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loaderService.display(true);
        console.log(this.model);
        //this.loading = true;
        this._LoginService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loaderService.display(false);
            _this.router.navigate(['/']);
            console.log(JSON.stringify(data));
        }, function (error) {
            //this.alertService.error(error, (this.alerts.filter(x => x.id === error.status))[0].message);
            console.log("Error pleas check !! => " + error.status);
            _this.loaderService.display(false);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-login',
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        common_1.Location,
        router_1.ActivatedRoute,
        loader_service_1.LoaderService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map