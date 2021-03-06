"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../../StringOperations/strMethods');
exports.default = (function (methodParameters, paramsName, optionalBodyParamsObjectName, hasOptionalBodyParameter) {
    var params = '';
    var paramsItem = '';
    var editedParamName = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        editedParamName = str.nameSymbolFilter(parameter.name);
        if (parameter.required === true && parameter.in.toLowerCase() === 'body' || parameter.in.toLowerCase() === 'formdata') {
            paramsItem = str.lowerLetter(editedParamName) + (": " + paramsName + "." + str.lowerLetter(editedParamName));
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }
    params = params.slice(7, params.length);
    if (hasOptionalBodyParameter === true && params.length > 0) {
        return ("body: {\n                    " + params + ",\n                    ..." + optionalBodyParamsObjectName + "\n                },");
    }
    if (hasOptionalBodyParameter === false && params.length > 0) {
        return ("body: {                    \n                    " + params + "\n                },");
    }
    if (hasOptionalBodyParameter === true) {
        return ("body: {                    \n                    ..." + optionalBodyParamsObjectName + "\n                },");
    }
});
