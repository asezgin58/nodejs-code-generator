"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../../StringOperations/strMethods');
exports.default = (function (methodParameters, paramsName, optionalParamsObjectName, hasOptional) {
    var params = '';
    var paramsItem = '';
    var editedParamName = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        editedParamName = str.nameSymbolFilter(parameter.name);
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(editedParamName) + (": " + paramsName + "." + str.lowerLetter(editedParamName));
            params = params + ', ' + paramsItem;
        }
    }
    params = params.slice(2, params.length);
    if (hasOptional === true && params.length > 0) {
        return ("{" + params + ", ..." + optionalParamsObjectName + "}");
    }
    if (params.length > 0 && hasOptional === false) {
        return ("{" + params + "}");
    }
    if (hasOptional === true) {
        return ("{..." + optionalParamsObjectName + "}");
    }
});
