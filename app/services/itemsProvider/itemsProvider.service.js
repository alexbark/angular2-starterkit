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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//import { ITEMS } from './mock-items';
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ItemService = (function () {
    function ItemService(http, router) {
        this.http = http;
        this.router = router;
        this.itemsAPIUrl = 'http://localhost:5678/api/items';
    }
    ItemService.prototype.getItems = function () {
        //return ITEMS;
        return this.http.get(this.itemsAPIUrl)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.getItem = function (id) {
        return this.http.get(this.itemsAPIUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.addItem = function (obj) {
        var _this = this;
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post(this.itemsAPIUrl, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.router.navigate(['/items']); }, function (err) { return console.log('some error'); }, function () { return console.log('success get'); });
    };
    ItemService.prototype.deleteItem = function (id) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.delete(this.itemsAPIUrl + '/' + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.router.navigate(['/items']); }, function (err) { return console.log('some error'); }, function () { return console.log('success get'); });
    };
    ItemService.prototype.editItem = function (id, obj) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post(this.itemsAPIUrl + '/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            //this.router.navigate(['/item/' + id]);
            //this.getItem(id);
        }, function (err) { return console.log('some error'); }, function () { return console.log('success get'); });
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=itemsProvider.service.js.map