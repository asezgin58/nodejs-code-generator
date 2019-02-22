"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addCode_1 = require("./addCode");
var createMethodName_1 = require("./createMethodName");
var optionalParameterExistControl_1 = require("./ParameterOperations/optionalParameterExistControl");
var createMethodParameters_1 = require("./ParameterOperations/createMethodParameters");
var createInterfaceParameters_1 = require("./ParameterOperations/createInterfaceParameters");
var createOptionalParametersObject_1 = require("./ParameterOperations/createOptionalParametersObject");
var createBodyObject_1 = require("./ParameterOperations/RequestParameters/createBodyObject");
var createQueryStringObject_1 = require("./ParameterOperations/RequestParameters/createQueryStringObject");
var app = require("../../app");
var str = require('../StringOperations/strMethods');
// //todo:FOR RESPONSE 1
// let createInterfaceResponseCode: Function = (interfaceName: string, responseInterfaceName: string, responseParams: any): any => {
//     return `export interface ${responseInterfaceName} {
//     ${responseParams}
// }\n\n`;
// };
exports.default = (function (urlPath, methodType, methodValues, IServicePath, serviceInterfaceName) {
    var methodName = str.lowerLetter(createMethodName_1.default(methodType, methodValues));
    // console.log(`------------${methodName}---------\n`);
    var methodParams = methodValues.parameters.length > 0 ? createMethodParameters_1.default(methodValues.parameters) : '';
    // //todo:FOR RESPONSE 2
    // let methodResponseParams: any = Object.keys(methodValues.responses['200']) + ': string';
    //FOR INTERFACE*****************************************************
    var methodInterfaceName = '';
    var responseInterfaceName = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName) + 'Params';
        var interfaceParamsCode = createInterfaceParameters_1.default(methodInterfaceName, responseInterfaceName, methodParams);
        addCode_1.default(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************
    var paramsName = 'params';
    var optionalParamsObjectName = 'optionalParameters';
    var hasOptional = optionalParameterExistControl_1.default(methodValues.parameters);
    return ("export const " + methodName + " = (" + (methodParams.length > 0 ? paramsName + ": " + serviceInterfaceName + "." + methodInterfaceName : '') + ") => {        \n    " + (methodParams.length > 0 && hasOptional === true ? createOptionalParametersObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName) : '') + "    \n    return (\n        krax({\n            name: '" + str.capitalize(methodValues.tags[0]) + "',\n            request: {\n                url: '" + app.serviceUrl + ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? urlPath + '?' : urlPath) + "'" + ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? " + queryString.stringify(" + createQueryStringObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) + ")" : '') + ",\n                method: '" + methodType.toUpperCase() + "',\n                " + ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0 ? createBodyObject_1.default(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) : '') + "\n                headers: {}\n            },                \n            onSuccess: (state: any) => {\n                console.log('Success...');\n                console.log('State : ', state);\n            },\n            onError: (state: any, err: any) => {\n                console.log('Error :', err);\n                console.log('State :', state);\n            },\n            onBefore: (state: any) => {\n                console.log('onBefore-State : ', state);\n            }\n        })\n\t);\n};\n\n");
});
