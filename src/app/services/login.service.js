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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/posts/";
        //private loginUrl:string = "https://reqres.in/api/login";
        this.loginUrl = "https://gruberapidev.azurewebsites.net/user_authentication";
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    LoginService.prototype.getData = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LoginService.prototype.login = function (username, password) {
        var body = JSON.stringify({ email: username, password: password, "provider": "internal" });
        console.log("Body => : " + body);
        return this.http.post(this.loginUrl, body, this.options)
            .map(function (response) {
            var user = response.json();
            localStorage.setItem('verificationEmail', user.email);
            console.log("User=> : " + user.email);
            return user.email;
        });
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map