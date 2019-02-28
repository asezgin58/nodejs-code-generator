"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addCode_1 = require("./addCode");
var createMethodName_1 = require("./createMethodName");
var createQueryParamsVariable_1 = require("./createQueryParamsVariable");
var optionalParameterExistControl_1 = require("./ParameterOperations/ControlOperations/optionalParameterExistControl");
var pathParameterExistControl_1 = require("./ParameterOperations/ControlOperations/pathParameterExistControl");
var createMethodParameters_1 = require("./ParameterOperations/createMethodParameters");
var createInterfaceParameters_1 = require("./ParameterOperations/createInterfaceParameters");
var createOptionalParametersObject_1 = require("./ParameterOperations/createOptionalParametersObject");
var createBodyObject_1 = require("./ParameterOperations/RequestParameters/createBodyObject");
require('dotenv').config();
var str = require('../StringOperations/strMethods');
// //todo:FOR RESPONSE 1
// let createInterfaceResponseCode: Function = (interfaceName: string, responseInterfaceName: string, responseParams: any): any => {
//     return `export interface ${responseInterfaceName} {
//     ${responseParams}
// }\n\n`;
// };
exports.default = (function (urlPath, methodType, methodValues, IServicePath, serviceInterfaceName) {
    var methodName = str.lowerLetter(createMethodName_1.default(methodType, methodValues));
    methodName = str.nameSymbolFilter(methodName);
    // console.log(`------------${methodName}---------\n`);
    var methodParams = methodValues.parameters.length > 0 ? createMethodParameters_1.default(methodValues.parameters) : '';
    // //todo:FOR RESPONSE 2
    // let methodResponseParams: any = Object.keys(methodValues.responses['200']) + ': string';
    //FOR INTERFACE*****************************************************
    var methodInterfaceName = '';
    var responseInterfaceName = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName);
        var interfaceParamsCode = createInterfaceParameters_1.default(methodInterfaceName, responseInterfaceName, methodParams);
        addCode_1.default(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************
    var paramsName = 'params';
    var methodParamsTemplate = '';
    if (methodParams.length > 0) {
        methodParamsTemplate = paramsName + ": " + serviceInterfaceName + "." + methodInterfaceName;
    }
    var optionalParamsObjectName = 'optionalParameters';
    var hasOptional = optionalParameterExistControl_1.default(methodValues.parameters);
    var optionalParameterObject = '';
    if (methodParams.length > 0 && hasOptional === true) {
        optionalParameterObject = createOptionalParametersObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName);
    }
    var queryParamsVariableName = '';
    if ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0) {
        queryParamsVariableName = 'queryParams';
    }
    var queryParamsDescribeCode = '';
    if ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0) {
        queryParamsDescribeCode = createQueryParamsVariable_1.default(queryParamsVariableName, optionalParamsObjectName, methodValues, paramsName, hasOptional);
    }
    var bodyObject = '';
    if ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0) {
        bodyObject = createBodyObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional);
    }
    var hasPathParameter = pathParameterExistControl_1.default(methodValues.parameters);
    var pathParameter = '';
    // if (hasPathParameter === true) {
    //     pathParameter = createPathParameter(methodValues.parameters);
    // }
    return ("export const " + methodName + " = (" + methodParamsTemplate + ") => {        \n    " + optionalParameterObject + "\n    " + queryParamsDescribeCode + "    \n    return (\n        krax({\n            name: '" + str.capitalize(methodValues.tags[0]) + "',\n            request: {\n                url: `" + process.env.SERVICE_URL + urlPath + pathParameter + "`" + (queryParamsVariableName.length > 0 ? " + " + queryParamsVariableName : queryParamsVariableName) + ",\n                method: '" + methodType.toUpperCase() + "',\n                " + bodyObject + "\n                headers: {}\n            },                \n            onSuccess: (state: any) => {\n                console.log('Success...');\n                console.log('State : ', state);\n            },\n            onError: (state: any, err: any) => {\n                console.log('Error :', err);\n                console.log('State :', state);\n            },\n            onBefore: (state: any) => {\n                console.log('onBefore-State : ', state);\n            }\n        })\n\t);\n};\n\n");
});
