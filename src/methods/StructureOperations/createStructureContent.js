"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createItem_1 = require("../ItemOperations/createItem");
var createMethodCode_1 = require("../CodeOperations/createMethodCode");
var createImportCode_1 = require("../CodeOperations/createImportCode");
var addCode_1 = require("../CodeOperations/addCode");
var itemExistControl_1 = require("../ItemOperations/itemExistControl");
var serviceParameterExistControl_1 = require("../CodeOperations/ParameterOperations/ControlOperations/serviceParameterExistControl");
var serviceQueryParameterExistControl_1 = require("../CodeOperations/ParameterOperations/ControlOperations/serviceQueryParameterExistControl");
var str = require('../StringOperations/strMethods');
exports.default = (function (paths, servicesDirPath) {
    var pathsKeys = Object.keys(paths);
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        var urlServiceName = serviceName.split('/')[0];
        urlServiceName = str.nameSymbolFilter(urlServiceName);
        serviceName = str.capitalize(urlServiceName);
        // console.log(`-----------${serviceName}SERVICE-------------`);
        var type = 'directory';
        serviceName = serviceName + "Service";
        itemExistControl_1.default(servicesDirPath + "/" + serviceName, type);
        type = 'file';
        var extension = '.ts';
        var servicePath = servicesDirPath + "/" + serviceName + "/" + serviceName + extension;
        itemExistControl_1.default(servicePath, type);
        //For Methods
        var methodValues = Object.values(paths[urlPath]);
        var methodTypes = Object.keys(paths[urlPath]);
        var hasParameter = serviceParameterExistControl_1.default(paths, urlServiceName);
        var hasQueryParameter = false;
        var IServicePath = '';
        var serviceInterfaceName = '';
        if (hasParameter === true) {
            //For Import Query-String
            hasQueryParameter = serviceQueryParameterExistControl_1.default(paths, urlServiceName);
            // // // //IMPORT INTERFACE
            serviceInterfaceName = "I" + serviceName;
            //
            // break;
            //FOR INTERFACES
            IServicePath = servicesDirPath + "/" + serviceName + "/" + serviceInterfaceName + extension;
            itemExistControl_1.default(IServicePath, type);
            //CASE 2---FOR INTERFACES
            createItem_1.default(IServicePath, ''); //for follow to json changes
        }
        //Create ImportCode
        var importCode = createImportCode_1.default(serviceInterfaceName, hasParameter, hasQueryParameter);
        // Add IMPORT CODES to file
        createItem_1.default(servicePath, importCode); //for follow to json changes
        var methodsCodes = '';
        var i = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {
            // console.log("methodValues : ", methodValues[i]);
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }
            var methodCode = createMethodCode_1.default(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            methodsCodes = methodsCodes + methodCode;
            // break;
        }
        addCode_1.default(servicePath, methodsCodes);
        // break;
    }
});
