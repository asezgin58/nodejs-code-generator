"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createElement_1 = require("./createElement");
var createMethod_1 = require("./createMethod");
var addMethodToService_1 = require("./addMethodToService");
// import str from "./strMethods";
var element = require('./createElementControl');
var str = require('./strMethods');
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
        //CASE 1
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }
        //CASE 2
        createElement_1.default(servicePath, ''); //for follow to json changes
        //FOR INTERFACES
        var IServicePath = servicesDirPath + "/" + serviceName + "/I" + serviceName + extension;
        element.describeControl(IServicePath, type);
        //CASE 2---FOR INTERFACES
        createElement_1.default(IServicePath, ''); //for follow to json changes
        var methodValues = Object.values(paths[urlPath]);
        var methodTypes = Object.keys(paths[urlPath]);
        var i_1 = 0;
        for (i_1 = 0; i_1 < methodValues.length; i_1++) {
            var methodCode = createMethod_1.default(urlPath, methodTypes[i_1], methodValues[i_1]);
            addMethodToService_1.default(servicePath, methodCode);
        }
    }
};
module.exports.createServiceFunction = createServiceFunction;
