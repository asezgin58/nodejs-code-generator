"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addCode_1 = require("./addCode");
var createMethodName_1 = require("./createMethodName");
var createQueryParamsVariable_1 = require("./createQueryParamsVariable");
var optionalParameterExistControl_1 = require("./ParameterOperations/ControlOperations/optionalParameterExistControl");
var pathParameterExistControl_1 = require("./ParameterOperations/ControlOperations/pathParameterExistControl");
var queryParameterExistControl_1 = require("./ParameterOperations/ControlOperations/queryParameterExistControl");
var optionalQueryParameterExistControl_1 = require("./ParameterOperations/ControlOperations/optionalQueryParameterExistControl");
var optionalBodyParameterExistControl_1 = require("./ParameterOperations/ControlOperations/optionalBodyParameterExistControl");
var bodyParameterExistControl_1 = require("./ParameterOperations/ControlOperations/bodyParameterExistControl");
var createMethodParameters_1 = require("./ParameterOperations/createMethodParameters");
var createInterfaceParameters_1 = require("./ParameterOperations/createInterfaceParameters");
var createOptionalParametersObjectForQuery_1 = require("./ParameterOperations/createOptionalParametersObjectForQuery");
var createOptionalParametersObjectForBody_1 = require("./ParameterOperations/createOptionalParametersObjectForBody");
var createBodyObject_1 = require("./ParameterOperations/RequestParameters/createBodyObject");
var createPathParameter_1 = require("./ParameterOperations/RequestParameters/createPathParameter");
require('dotenv').config();
var str = require('../StringOperations/strMethods');
exports.default = (function (urlPath, methodType, methodValues, IServicePath, serviceInterfaceName) {
    var methodName = str.lowerLetter(createMethodName_1.default(methodType, methodValues));
    methodName = str.nameSymbolFilter(methodName);
    // console.log(`------------${methodName}---------\n`);
    var methodParams = methodValues.parameters.length > 0 ? createMethodParameters_1.default(methodValues.parameters) : '';
    //FOR INTERFACE*****************************************************
    var methodInterfaceName = '';
    var responseInterfaceName = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName);
        var interfaceParamsCode = createInterfaceParameters_1.default(methodInterfaceName, responseInterfaceName, methodParams);
        addCode_1.default(IServicePath, interfaceParamsCode);
    }
    //END-FOR INTERFACE**************************************************
    //***Method Parameter Template
    var paramsName = 'params';
    var optionalQueryParamsObjectName = '';
    var optionalBodyParamsObjectName = '';
    var methodParamsTemplate = '';
    if (methodParams.length > 0) {
        methodParamsTemplate = paramsName + ": " + serviceInterfaceName + "." + methodInterfaceName;
    }
    //***End-Method Parameter Template
    //***Control Methods
    var hasOptional = optionalParameterExistControl_1.default(methodValues.parameters);
    var hasOptionalQueryParameter = optionalQueryParameterExistControl_1.default(methodValues.parameters);
    var hasOptionalBodyParameter = optionalBodyParameterExistControl_1.default(methodValues.parameters);
    var hasQueryParameter = queryParameterExistControl_1.default(methodValues.parameters);
    var hasBodyParameter = bodyParameterExistControl_1.default(methodValues.parameters);
    var hasPathParameter = pathParameterExistControl_1.default(methodValues.parameters);
    //***End-Control Methods
    //***Optional Parameters
    optionalQueryParamsObjectName = 'optionalParametersForQuery';
    var optionalParameterObjectForQuery = '';
    if (methodParams.length > 0 && hasOptionalQueryParameter === true) {
        optionalParameterObjectForQuery = createOptionalParametersObjectForQuery_1.default(methodValues.parameters, paramsName, optionalQueryParamsObjectName);
    }
    optionalBodyParamsObjectName = 'optionalParametersForBody';
    var optionalParameterObjectForBody = '';
    if (methodParams.length > 0 && hasOptionalBodyParameter === true) {
        optionalParameterObjectForBody = createOptionalParametersObjectForBody_1.default(methodValues.parameters, paramsName, optionalBodyParamsObjectName);
    }
    //***End-Optional Parameters
    //***With Query Parameters
    var queryParamsVariableName = '';
    var queryParameter = '';
    var queryParamsDescribeCode = '';
    if (hasQueryParameter === true) {
        if (methodParams.length > 0) {
            queryParamsVariableName = 'queryParams';
            queryParamsDescribeCode = createQueryParamsVariable_1.default(queryParamsVariableName, optionalQueryParamsObjectName, methodValues, paramsName, hasQueryParameter);
        }
        if (queryParamsVariableName.length > 0) {
            queryParameter = " + " + queryParamsVariableName;
        }
    }
    //***End-With Query Parameters
    //***Body Object Parameter
    var bodyObject = '';
    if (hasBodyParameter === true) {
        if ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0) {
            bodyObject = createBodyObject_1.default(methodValues.parameters, paramsName, optionalBodyParamsObjectName, hasOptionalBodyParameter);
        }
    }
    //***End-Body Object Parameter
    // if (methodName === 'fileUploadAsync') {
    //     console.log("queryParam : ", hasQueryParameter);
    //     console.log("BodyParam : ", hasBodyParameter);
    // }
    //***With Path Parameters
    var pathParameter = '';
    if (hasPathParameter === true) {
        pathParameter = createPathParameter_1.default(methodValues.parameters, paramsName);
    }
    //***End-With Path Parameters
    return ("export const " + methodName + " = (" + methodParamsTemplate + ") => {        \n    " + optionalParameterObjectForQuery + "\n    " + optionalParameterObjectForBody + "\n    " + queryParamsDescribeCode + "    \n    return (\n        krax({\n            name: '" + str.capitalize(methodValues.tags[0]) + "',\n            request: {\n                url: `" + process.env.SERVICE_URL + urlPath + pathParameter + "`" + queryParameter + ",\n                method: '" + methodType.toUpperCase() + "',\n                " + bodyObject + "\n                headers: {}\n            },                \n            onSuccess: (state: any) => {\n                console.log('Success...');\n                console.log('State : ', state);\n            },\n            onError: (state: any, err: any) => {\n                console.log('Error :', err);\n                console.log('State :', state);\n            },\n            onBefore: (state: any) => {\n                console.log('onBefore-State : ', state);\n            }\n        })\n\t);\n};\n\n");
});
