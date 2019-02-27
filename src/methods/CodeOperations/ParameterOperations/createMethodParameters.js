"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../StringOperations/strMethods');
exports.default = (function (methodParameters) {
    var params = '';
    var paramsItem = '';
    var paramsUnReq = '';
    var editedParamName = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        editedParamName = str.nameSymbolFilter(parameter.name);
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(editedParamName) + (": " + (parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))));
            params = params + ', ' + paramsItem;
        }
        else {
            paramsItem = str.lowerLetter(editedParamName) + ("?: " + (parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))));
            paramsUnReq = paramsUnReq + ', ' + paramsItem;
        }
    }
    params = params.slice(2, params.length);
    return params.length > 0 ? params + paramsUnReq : paramsUnReq.slice(2, paramsUnReq.length);
});
