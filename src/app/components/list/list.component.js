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
var index_1 = require("../../services/index");
var AlertsArray = [
    {
        id: 400,
        message: 'Invalid Data',
    }, {
        id: 401,
        message: 'User is not valid for Request',
    }, {
        id: 403,
        message: 'Maximum Attempt Reached, please contact Gruber customer service',
    }, {
        id: 404,
        message: 'You have not found any company that matches your search.',
    }, {
        id: 500,
        message: 'Internal Server Error',
    }
];
var ListComponent = (function () {
    function ListComponent(_PostService, location, alertService) {
        this._PostService = _PostService;
        this.location = location;
        this.alertService = alertService;
        this.name = 'Angular';
        this.title = "";
        this.alerts = AlertsArray;
        this.errorMessage = '';
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._PostService.getData()
            .subscribe(function (posts) {
            _this.posts = posts;
        }, function (error) {
            _this.alertService.error(error, (_this.alerts.filter(function (x) { return x.id === error.status; }))[0].message);
        });
    };
    ListComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-list',
        templateUrl: './list.component.html'
    }),
    __metadata("design:paramtypes", [index_1.PostService,
        common_1.Location,
        index_1.AlertService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map