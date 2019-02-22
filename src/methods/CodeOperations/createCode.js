"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addCode_1 = require("./addCode");
var app = require("../../app");
var str = require('../StringOperations/strMethods');
var createMethodParameters = function (methodParameters) {
    var params = '';
    var paramsItem = '';
    var paramsUnReq = '';
    for (var _i = 0, methodParameters_1 = methodParameters; _i < methodParameters_1.length; _i++) {
        var parameter = methodParameters_1[_i];
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + (": " + (parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))));
            params = params + ', ' + paramsItem;
        }
        else {
            paramsItem = str.lowerLetter(parameter.name) + ("?: " + (parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))));
            paramsUnReq = paramsUnReq + ', ' + paramsItem;
        }
    }
    params = params.slice(2, params.length);
    return params.length > 0 ? params + paramsUnReq : paramsUnReq.slice(2, paramsUnReq.length);
};
var createInterfaceParamsCode = function (interfaceName, responseInterfaceName, params) {
    var paramsArray = params.split(', ');
    params = '';
    for (var i = 0; i < paramsArray.length; i++) {
        params = params + ',\n\t' + paramsArray[i];
    }
    params = params.slice(2, params.length);
    return "export interface " + interfaceName + " {\n" + params + "\n}\n\n";
};
var createBodyObject = function (methodParameters, paramsName, optionalParamsObjectName, hasOptional) {
    var params = '';
    var paramsItem = '';
    for (var _i = 0, methodParameters_2 = methodParameters; _i < methodParameters_2.length; _i++) {
        var parameter = methodParameters_2[_i];
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + (": " + paramsName + "." + str.lowerLetter(parameter.name));
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }
    params = params.slice(7, params.length);
    if (hasOptional === true && params.length > 0) {
        return ("body: {\n                    " + params + ",\n                    ..." + optionalParamsObjectName + "\n                },");
    }
    if (params.length > 0 && hasOptional === false) {
        return ("body: {                    \n                    " + params + "\n                },");
    }
    if (hasOptional === true) {
        return ("body: {                    \n                    ..." + optionalParamsObjectName + "\n                },");
    }
};
var createQueryObject = function (methodParameters, paramsName, optionalParamsObjectName, hasOptional) {
    var params = '';
    var paramsItem = '';
    for (var _i = 0, methodParameters_3 = methodParameters; _i < methodParameters_3.length; _i++) {
        var parameter = methodParameters_3[_i];
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + (": " + paramsName + "." + str.lowerLetter(parameter.name));
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
};
var createOptionalParametersObject = function (methodParameters, paramsName, optionalParamsObjectName) {
    var params = '';
    var paramsItem = '';
    for (var _i = 0, methodParameters_4 = methodParameters; _i < methodParameters_4.length; _i++) {
        var parameter = methodParameters_4[_i];
        if (parameter.required === false) {
            paramsItem = "...(typeof " + paramsName + "." + str.lowerLetter(parameter.name) + " !== 'undefined' ? {" + str.lowerLetter(parameter.name) + ": " + paramsName + "." + str.lowerLetter(parameter.name) + "} : {})";
            params = params + ',\n\t\t' + paramsItem;
        }
    }
    params = params.slice(3, params.length);
    return ("\n\tlet " + optionalParamsObjectName + ": any = {\n    " + params + "                    \n    };\n");
};
var hasOptionalParamControl = function (methodParameters) {
    var hasOptional = false;
    for (var _i = 0, methodParameters_5 = methodParameters; _i < methodParameters_5.length; _i++) {
        var parameter = methodParameters_5[_i];
        if (parameter.required === false) {
            hasOptional = true;
            return hasOptional;
        }
        else {
            hasOptional = false;
        }
    }
    return hasOptional;
};
// //todo:FOR RESPONSE 1
// let createInterfaceResponseCode: Function = (interfaceName: string, responseInterfaceName: string, responseParams: any): any => {
//     return `export interface ${responseInterfaceName} {
//     ${responseParams}
// }\n\n`;
// };
var createMethodName = function (methodType, methodValues) {
    var tag = str.capitalize(methodValues.tags[0]);
    if (methodType.toLowerCase() === 'get') {
        if (methodValues.parameters.length === 1) {
            return "" + methodValues.operationId + tag + "By" + str.capitalize(methodValues.parameters[0].name);
        }
        else if (methodValues.operationId.toLowerCase() === 'get') {
            return "" + methodValues.operationId + tag;
        }
        else {
            return methodValues.operationId;
        }
    }
    if (methodType.toLowerCase() === 'post') {
        if (methodValues.operationId.toLowerCase() === 'post') {
            return "set" + tag;
        }
        else if (methodValues.operationId.toLowerCase() === 'delete') {
            return "remove" + tag;
        }
        else {
            return methodValues.operationId;
        }
    }
    if (methodType.toLowerCase() === 'put') {
        if (methodValues.operationId.toLowerCase() === 'put') {
            return "update" + tag;
        }
        else {
            return methodValues.operationId;
        }
    }
    if (methodType.toLowerCase() === 'delete') {
        if (methodValues.operationId.toLowerCase() === 'delete') {
            return "remove" + tag;
        }
        else {
            return methodValues.operationId;
        }
    }
};
exports.default = (function (urlPath, methodType, methodValues, IServicePath, serviceInterfaceName) {
    var methodName = str.lowerLetter(createMethodName(methodType, methodValues));
    // console.log(`------------${methodName}---------\n`);
    var methodParams = methodValues.parameters.length > 0 ? createMethodParameters(methodValues.parameters) : '';
    // //todo:FOR RESPONSE 2
    // let methodResponseParams: any = Object.keys(methodValues.responses['200']) + ': string';
    //FOR INTERFACE*****************************************************
    var methodInterfaceName = '';
    var responseInterfaceName = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName) + 'Params';
        var interfaceParamsCode = createInterfaceParamsCode(methodInterfaceName, responseInterfaceName, methodParams);
        addCode_1.default(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************
    var paramsName = 'params';
    var optionalParamsObjectName = 'optionalParameters';
    var hasOptional = hasOptionalParamControl(methodValues.parameters);
    return ("export const " + methodName + " = (" + (methodParams.length > 0 ? paramsName + ": " + serviceInterfaceName + "." + methodInterfaceName : '') + ") => {        \n    " + (methodParams.length > 0 && hasOptional === true ? createOptionalParametersObject(methodValues.parameters, paramsName, optionalParamsObjectName) : '') + "    \n    return (\n        krax({\n            name: '" + str.capitalize(methodValues.tags[0]) + "',\n            request: {\n                url: '" + app.serviceUrl + ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? urlPath + '?' : urlPath) + "'" + ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? " + queryString.stringify(" + createQueryObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) + ")" : '') + ",\n                method: '" + methodType.toUpperCase() + "',\n                " + ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0 ? createBodyObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) : '') + "\n                headers: {}\n            },                \n            onSuccess: (state: any) => {\n                console.log('Success...');\n                console.log('State : ', state);\n            },\n            onError: (state: any, err: any) => {\n                console.log('Error :', err);\n                console.log('State :', state);\n            },\n            onBefore: (state: any) => {\n                console.log('onBefore-State : ', state);\n            }\n        })\n\t);\n};\n\n");
});
