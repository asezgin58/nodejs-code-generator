"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (methodParameters, parameterLocation) {
    var hasOptional = false;
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (!parameterLocation) {
            if (parameter.required === false) {
                hasOptional = true;
                return hasOptional;
            }
            else {
                hasOptional = false;
            }
        }
        else {
            if (parameter.required === false && parameter.in.toLowerCase() === parameterLocation.toLowerCase()) {
                hasOptional = true;
                return hasOptional;
            }
            else {
                hasOptional = false;
            }
        }
    }
    return hasOptional;
});
