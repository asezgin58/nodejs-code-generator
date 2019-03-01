"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (methodParameters) {
    var hasQueryParameter = false;
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (parameter.in.toLowerCase() === 'query') {
            hasQueryParameter = true;
            return hasQueryParameter;
        }
        else {
            hasQueryParameter = false;
        }
    }
    return hasQueryParameter;
});
