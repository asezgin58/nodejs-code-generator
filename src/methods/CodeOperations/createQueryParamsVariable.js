"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createQueryStringObject_1 = require("./ParameterOperations/RequestParameters/createQueryStringObject");
exports.default = (function (queryParamsVariableName, optionalQueryParamsObjectName, methodValues, paramsName, hasQueryParameter) {
    return "let " + queryParamsVariableName + ": any = queryString.stringify(" + createQueryStringObject_1.default(methodValues.parameters, paramsName, optionalQueryParamsObjectName, hasQueryParameter) + ");\n    if (" + queryParamsVariableName + ".length > 0) {\n        " + queryParamsVariableName + " = '?' + " + queryParamsVariableName + ";\n    }\n";
});
