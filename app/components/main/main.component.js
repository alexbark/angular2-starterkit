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
var about_component_1 = require('./../about/about.component');
var home_component_1 = require('./../home/home.component');
var items_component_1 = require('./../items/items.component');
var item_component_1 = require('./../item/item.component');
var addItem_component_1 = require('./../addItem/addItem.component');
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/home']);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-component',
            templateUrl: 'app/components/main/main.component.tmpl.html',
            styleUrls: ['app/components/main/main.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/items', component: items_component_1.ItemsComponent },
            { path: '/item/:id', component: item_component_1.ItemComponent },
            { path: '/add', component: addItem_component_1.AddItemComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map