"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createQueryStringObject_1 = require("./ParameterOperations/RequestParameters/createQueryStringObject");
exports.default = (function (queryParamsVariableName, optionalParamsObjectName, methodValues, paramsName, hasOptional) {
    return "let " + queryParamsVariableName + ": any = queryString.stringify(" + createQueryStringObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) + ");\n    if (" + queryParamsVariableName + ".length > 0) {\n        " + queryParamsVariableName + " = '?' + " + queryParamsVariableName + ";\n    }\n";
});
