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
var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe.prototype.transform = function (value, argument) {
        if (argument == 'asc') {
            value.sort(function (a, b) {
                return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1
                    : (b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0;
            });
            return value.filter(function (item) { return item.title; });
        }
        if (argument == 'desc') {
            value.sort(function (a, b) {
                return (a.title.toLowerCase() > b.title.toLowerCase()) ? -1
                    : (b.title.toLowerCase() > a.title.toLowerCase()) ? 1 : 0;
            });
            return value.filter(function (item) { return item.title; });
        }
    };
    OrderPipe = __decorate([
        core_1.Pipe({ name: 'order' }), 
        __metadata('design:paramtypes', [])
    ], OrderPipe);
    return OrderPipe;
}());
exports.OrderPipe = OrderPipe;
//# sourceMappingURL=order.pipe.js.map