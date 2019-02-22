"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createItem_1 = require("../ItemOperations/createItem");
var createCode_1 = require("../CodeOperations/createCode");
var addCode_1 = require("../CodeOperations/addCode");
var itemExistControl_1 = require("../ItemOperations/itemExistControl");
// import fs = require('fs')
// const importInterface: any = require('./importInterfaceToService');
var str = require('../StringOperations/strMethods');
// let importInterface: Function = (path: string, structure: any) => {
//     fs.writeFile(`${path}`, /*value*/ structure, function (err) {
//         if (err) {
//             throw err;
//         }
//     })
// };
var importCodeToMethod = function (interfaceName, hasParameter) {
    if (hasParameter === true) {
        return "import * as " + interfaceName + " from './" + interfaceName + "';\nimport {krax} from \"react-krax\";\nconst queryString = require('query-string');\n\n";
    }
    else {
        return "import {krax} from \"react-krax\";\n\n";
    }
    // return `import {krax} from "react-krax";\n\n`;
};
var hasParameterInService = function (paths, urlPathParam) {
    var hasParameter = true;
    // console.log("URLPATH", urlPathParam);
    var pathsKeys = Object.keys(paths);
    var i = 0;
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];
        if (serviceName === urlPathParam) {
            var methodValues = Object.values(paths[urlPath]);
            for (i = 0; i < methodValues.length; i++) {
                if (methodValues[i].parameters.length > 0) {
                    hasParameter = true;
                    return hasParameter;
                }
                else {
                    hasParameter = false;
                }
            }
        }
    }
    return hasParameter;
};
exports.default = (function (paths, servicesDirPath) {
    var pathsKeys = Object.keys(paths);
    var i = 0;
    for (var _i = 0, pathsKeys_2 = pathsKeys; _i < pathsKeys_2.length; _i++) {
        var urlPath = pathsKeys_2[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        var urlServiceName = serviceName.split('/')[0];
        serviceName = str.capitalize(urlServiceName);
        // console.log(`-----------${serviceName}SERVICE-------------`);
        var type = 'directory';
        serviceName = serviceName + "Service";
        itemExistControl_1.default(servicesDirPath + "/" + serviceName, type);
        type = 'file';
        var extension = '.ts';
        var servicePath = servicesDirPath + "/" + serviceName + "/" + serviceName + extension;
        itemExistControl_1.default(servicePath, type);
        //CASE 1---SERVICE
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }
        var methodValues = Object.values(paths[urlPath]);
        var methodTypes = Object.keys(paths[urlPath]);
        var hasParameter = true;
        // continue;
        hasParameter = hasParameterInService(paths, urlServiceName);
        var IServicePath = '';
        var serviceInterfaceName = '';
        if (hasParameter === true) {
            ////////////*****************************
            // // // //IMPORT INTERFACE
            serviceInterfaceName = "I" + serviceName;
            //
            // break;
            //FOR INTERFACES
            IServicePath = servicesDirPath + "/" + serviceName + "/" + serviceInterfaceName + extension;
            itemExistControl_1.default(IServicePath, type);
            //CASE 2---FOR INTERFACES
            createItem_1.default(IServicePath, ''); //for follow to json changes
            ////////////*****************************
        }
        var importCode = importCodeToMethod(serviceInterfaceName, hasParameter);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        createItem_1.default(servicePath, importCode); //for follow to json changes
        // //CASE 2---SERVICE
        // createElement(servicePath, '');//for follow to json changes
        var i_1 = 0;
        // continue;
        for (i_1 = 0; i_1 < methodValues.length; i_1++) {
            // console.log("methodValues : ", methodValues[i]);
            // console.log("url { control: ", urlPath.includes('{'));
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }
            var methodCode = createCode_1.default(urlPath, methodTypes[i_1], methodValues[i_1], IServicePath, serviceInterfaceName);
            addCode_1.default(servicePath, methodCode);
            // break;
        }
        // break;
    }
});
