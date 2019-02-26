"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createItem_1 = require("../ItemOperations/createItem");
var createMethodCode_1 = require("../CodeOperations/createMethodCode");
var createImportCode_1 = require("../CodeOperations/createImportCode");
var addCode_1 = require("../CodeOperations/addCode");
var itemExistControl_1 = require("../ItemOperations/itemExistControl");
var serviceParameterExistControl_1 = require("../CodeOperations/ParameterOperations/serviceParameterExistControl");
var str = require('../StringOperations/strMethods');
// import fs = require('fs')
// // Create Item
// let readServiceFile: Function = (path: string): any => {
//     return fs.readFileSync(`${path}`, 'utf8');
// };
exports.default = (function (paths, servicesDirPath) {
    var pathsKeys = Object.keys(paths);
    // let prevServiceName: string = '';
    // let counter: number = 0;
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        // let urlPath: any = pathsKeys[counter];
        var serviceName = urlPath.slice(1, urlPath.length);
        var urlServiceName = serviceName.split('/')[0];
        serviceName = str.capitalize(urlServiceName);
        //******************PrevServiceName===ServiceName Control*******------------
        // if (counter === 0) {
        //     prevServiceName = serviceName;
        // } else {
        //     let prevUrlPath: any = pathsKeys[counter - 1];
        //     prevServiceName = prevUrlPath.slice(1, prevUrlPath.length);
        //     let prevUrlServiceName: string = prevServiceName.split('/')[0];
        //     prevServiceName = str.capitalize(prevUrlServiceName);
        // }
        // console.log("Prev : ", prevServiceName);
        // console.log("Current : ", serviceName);
        // continue;
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
        var hasParameter = serviceParameterExistControl_1.default(paths, urlServiceName);
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
        var importCode = createImportCode_1.default(serviceInterfaceName, hasParameter);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        // Add IMPORT CODES to file
        createItem_1.default(servicePath, importCode); //for follow to json changes
        // let fileContent: any = readServiceFile(servicePath);//needn't.
        //
        // console.log("State : ", fileContent);
        //
        // break;
        // //CASE 2---SERVICE
        // createItem(servicePath, '');//for follow to json changes
        var methodsCodes = '';
        var i = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {
            // console.log("methodValues : ", methodValues[i]);
            // console.log("url { control: ", urlPath.includes('{'));
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }
            var methodCode = createMethodCode_1.default(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            methodsCodes = methodsCodes + methodCode;
            // break;
        }
        // // this code block needn't.
        // if (!fileContent.includes(importCode)) {
        //     addCode(servicePath, importCode);
        // }
        addCode_1.default(servicePath, methodsCodes);
        // break;
    }
});
