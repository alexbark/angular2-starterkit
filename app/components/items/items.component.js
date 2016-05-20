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
var http_1 = require('@angular/http');
var itemsProvider_service_1 = require('./../../services/itemsProvider/itemsProvider.service');
var search_pipe_1 = require('./../../services/pipes/search.pipe');
var ItemsComponent = (function () {
    function ItemsComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
    }
    ItemsComponent.prototype.onAddNewItemClick = function () {
        this.router.navigate(['/add']);
    };
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        //this.items = this.itemService.getItems();
        this.itemService.getItems()
            .subscribe(function (data) { return _this.items = data; }, function (err) { return console.log('some error'); }, function () { return console.log('success get'); });
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemsComponent.prototype.onItemClick = function (id) {
        this.router.navigate(['/item/' + id]);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/items/items.component.tmpl.html',
            styleUrls: ['app/components/items/items.component.css'],
            pipes: [search_pipe_1.SearchPipe],
            providers: [itemsProvider_service_1.ItemService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, itemsProvider_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map