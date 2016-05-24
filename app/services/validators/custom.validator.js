"use strict";
var CustomValidator = (function () {
    function CustomValidator() {
    }
    //undercsoreNotFound: boolean = false;
    CustomValidator.checkUnderscore = function (control) {
        if (control.value.indexOf('_') >= 0) {
            return null;
        }
        //console.log(this.control); 
        return { underscoreNotFound: true };
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
//# sourceMappingURL=custom.validator.js.map