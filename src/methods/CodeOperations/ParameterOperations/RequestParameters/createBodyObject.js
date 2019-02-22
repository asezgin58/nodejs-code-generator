"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../../StringOperations/strMethods');
exports.default = (function (methodParameters, paramsName, optionalParamsObjectName, hasOptional) {
    var params = '';
    var paramsItem = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + (": " + paramsName + "." + str.lowerLetter(parameter.name));
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }
    params = params.slice(7, params.length);
    if (hasOptional === true && params.length > 0) {
        return ("body: {\n                    " + params + ",\n                    ..." + optionalParamsObjectName + "\n                },");
    }
    if (params.length > 0 && hasOptional === false) {
        return ("body: {                    \n                    " + params + "\n                },");
    }
    if (hasOptional === true) {
        return ("body: {                    \n                    ..." + optionalParamsObjectName + "\n                },");
    }
});
