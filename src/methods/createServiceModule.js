"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createElement_1 = require("./createElement");
var createMethod_1 = require("./createMethod");
var addItemToService_1 = require("./addItemToService");
// import fs = require('fs')
var element = require('./createElementControl');
// const importInterface: any = require('./importInterfaceToService');
var str = require('./strMethods');
// let importInterface: Function = (path: string, structure: any) => {
//     fs.writeFile(`${path}`, /*value*/ structure, function (err) {
//         if (err) {
//             throw err;
//         }
//     })
// };
var importInterfaceCodeMethod = function (interfaceName) {
    return "import * as " + interfaceName + " from './" + interfaceName + "';\nimport {krax} from \"react-krax\";\nconst queryString = require('query-string');\n\n";
    // return `import {krax} from "react-krax/lib";\n\n`;
};
var createServiceFunction = function (paths, servicesDirPath) {
    var pathsKeys = Object.keys(paths);
    // let pathsValues: any[] = Object.values(paths);
    var i = 0;
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];
        serviceName = str.capitalize(serviceName);
        var type = 'directory';
        serviceName = serviceName + "Service";
        element.describeControl(servicesDirPath + "/" + serviceName, type);
        type = 'file';
        var extension = '.ts';
        var servicePath = servicesDirPath + "/" + serviceName + "/" + serviceName + extension;
        element.describeControl(servicePath, type);
        //CASE 1---SERVICE
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }
        // // // //IMPORT INTERFACE
        var serviceInterfaceName = "I" + serviceName;
        var importInterfaceCode = importInterfaceCodeMethod(serviceInterfaceName);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        createElement_1.default(servicePath, importInterfaceCode); //for follow to json changes
        // //CASE 2---SERVICE
        // createElement(servicePath, '');//for follow to json changes
        //
        // break;
        //FOR INTERFACES
        var IServicePath = servicesDirPath + "/" + serviceName + "/" + serviceInterfaceName + extension;
        element.describeControl(IServicePath, type);
        //CASE 2---FOR INTERFACES
        createElement_1.default(IServicePath, ''); //for follow to json changes
        var methodValues = Object.values(paths[urlPath]);
        var methodTypes = Object.keys(paths[urlPath]);
        var i_1 = 0;
        // continue;
        for (i_1 = 0; i_1 < methodValues.length; i_1++) {
            // console.log("url { control: ", urlPath.includes('{'));
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }
            var methodCode = createMethod_1.default(urlPath, methodTypes[i_1], methodValues[i_1], IServicePath, serviceInterfaceName);
            addItemToService_1.default(servicePath, methodCode);
            // break;
        }
        // break;
    }
};
module.exports.createServiceFunction = createServiceFunction;
