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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var itemsProvider_service_1 = require('./../../services/itemsProvider/itemsProvider.service');
var async_1 = require('@angular/common/src/facade/async');
var AddItemComponent = (function () {
    function AddItemComponent(fb, itemService, router) {
        this.fb = fb;
        this.itemService = itemService;
        this.router = router;
        this.userForm = this.fb.group({
            'title': ['', common_1.Validators.required],
            'author': ['', common_1.Validators.required],
            'content': ['', common_1.Validators.required]
        });
    }
    AddItemComponent.prototype.onFormSubmit = function (event) {
        this.itemService.addItem(this.userForm.value);
        //TimerWrapper.setTimeout(() => {
        //	this.router.navigate(['/items']);
        //}, 500);
    };
    AddItemComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/components/addItem/addItem.component.tmpl.html',
            styleUrls: ['app/components/addItem/addItem.component.css'],
            providers: [itemsProvider_service_1.ItemService, http_1.HTTP_PROVIDERS, async_1.TimerWrapper]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, itemsProvider_service_1.ItemService, router_1.Router])
    ], AddItemComponent);
    return AddItemComponent;
}());
exports.AddItemComponent = AddItemComponent;
//# sourceMappingURL=addItem.component.js.map