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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var global_1 = require("../Shared/global");
var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    PostService.prototype.getData = function () {
        var Useroptions = this.getHeaderParams();
        return this.http.get(global_1.Global.BASE_GET_USERS, Useroptions)
            .map(function (res) {
            var results = res.json();
            //console.log("Result " + JSON.stringify(results));
            return results;
        });
        //.catch(this.handleError);
    };
    // private handleError(error:any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }
    //Start - Get Header Data
    PostService.prototype.getHeaderParams = function () {
        var Userheaders;
        var Useroptions;
        Userheaders = new http_1.Headers({
            'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
        });
        Useroptions = new http_1.RequestOptions({ headers: Userheaders });
        return Useroptions;
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map