"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../StringOperations/strMethods');
exports.default = (function (methodParameters, paramsName, optionalParamsObjectName) {
    var params = '';
    var paramsItem = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (parameter.required === false) {
            paramsItem = "...(typeof " + paramsName + "." + str.lowerLetter(parameter.name) + " !== 'undefined' ? {" + str.lowerLetter(parameter.name) + ": " + paramsName + "." + str.lowerLetter(parameter.name) + "} : {})";
            params = params + ',\n\t\t' + paramsItem;
        }
    }
    params = params.slice(3, params.length);
    return ("\n\tlet " + optionalParamsObjectName + ": any = {\n    " + params + "                    \n    };\n");
});
