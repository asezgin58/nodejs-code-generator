"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../StringOperations/strMethods');
exports.default = (function (methodParameters, paramsName, optionalParamsObjectName) {
    var params = '';
    var paramsItem = '';
    var editedParamName = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (parameter.in.toLowerCase() === 'query') {
            editedParamName = str.nameSymbolFilter(parameter.name);
            if (parameter.required === false) {
                paramsItem = "...(typeof " + paramsName + "." + str.lowerLetter(editedParamName) + " !== 'undefined' ? {" + str.lowerLetter(editedParamName) + ": " + paramsName + "." + str.lowerLetter(editedParamName) + "} : {})";
                params = params + ',\n\t\t' + paramsItem;
            }
        }
    }
    params = params.slice(3, params.length);
    return ("\n\tlet " + optionalParamsObjectName + ": any = {\n    " + params + "                    \n    };");
});
