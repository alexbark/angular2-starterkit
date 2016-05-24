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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var async_1 = require('@angular/common/src/facade/async');
var itemsProvider_service_1 = require('./../../services/itemsProvider/itemsProvider.service');
var ItemComponent = (function () {
    function ItemComponent(itemService, router, fb) {
        this.itemService = itemService;
        this.router = router;
        this.fb = fb;
        this.editingItem = false;
        this.editForm = this.fb.group({
            'title': ['', common_1.Validators.required],
            'author': ['', common_1.Validators.required],
            'content': ['', common_1.Validators.required]
        });
    }
    ItemComponent.prototype.onEdit = function () {
        this.editingItem = true;
    };
    ItemComponent.prototype.onSave = function (id) {
        var _this = this;
        if (this.editForm.value.title == "") {
            this.editForm.value.title = this.item.title;
        }
        if (this.editForm.value.author == "") {
            this.editForm.value.author = this.item.author;
        }
        if (this.editForm.value.content == "") {
            this.editForm.value.content = this.item.content;
        }
        this.itemService.editItem(id, this.editForm.value);
        async_1.TimerWrapper.setTimeout(function () {
            _this.editingItem = false;
            _this.getItem(id);
            _this.router.navigate(['/item/' + id]);
        }, 500);
    };
    ItemComponent.prototype.onDelete = function (id) {
        this.itemService.deleteItem(id);
        //TimerWrapper.setTimeout(() => {
        //	this.router.navigate(['/items']);
        //}, 500);
    };
    ItemComponent.prototype.getItem = function (id) {
        var _this = this;
        this.itemService.getItem(id)
            .subscribe(function (data) { return _this.item = data; }, function (err) { return console.log('some error'); }, function () { return console.log('succsess get'); });
    };
    ItemComponent.prototype.ngOnInit = function () {
        var temp = window.location.href.split('/');
        this.itemId = temp[temp.length - 1];
        this.getItem(this.itemId);
    };
    ItemComponent.prototype.onCancel = function (id) {
        this.router.navigate(['/item/' + id]);
        this.editingItem = false;
    };
    ItemComponent.prototype.onBack = function () {
        this.router.navigate(['/items']);
    };
    ItemComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/item/item.component.tmpl.html',
            styleUrls: ['app/components/item/item.component.css'],
            providers: [itemsProvider_service_1.ItemService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [itemsProvider_service_1.ItemService, router_1.Router, common_1.FormBuilder])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map