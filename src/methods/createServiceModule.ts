import createElement from "./createElement";
import createMethod from "./createMethod";
import addItemToService from "./addItemToService";
import {string} from "prop-types";
// import fs = require('fs')

const element: any = require('./createElementControl');
// const importInterface: any = require('./importInterfaceToService');
let str: any = require('./strMethods');

// let importInterface: Function = (path: string, structure: any) => {
//     fs.writeFile(`${path}`, /*value*/ structure, function (err) {
//         if (err) {
//             throw err;
//         }
//     })
// };

let importCodeToMethod: Function = (interfaceName: any, hasParameter: boolean): any => {

    if (hasParameter === true) {
        return `import * as ${interfaceName} from './${interfaceName}';
import {krax} from "react-krax";
const queryString = require('query-string');\n\n`;
    } else {
        return `import {krax} from "react-krax";\n\n`;
    }

    // return `import {krax} from "react-krax";\n\n`;
};


let hasParameterInService: Function = (paths: any, urlPathParam: string): any => {
    let hasParameter: boolean = true;

    // console.log("URLPATH", urlPathParam);

    let pathsKeys: any[] = Object.keys(paths);
    let i: number = 0;

    for (let urlPath of pathsKeys) {
        let serviceName: string = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];

        if (serviceName === urlPathParam) {

            let methodValues: any[] = Object.values(paths[urlPath]);

            for (i = 0; i < methodValues.length; i++) {

                if (methodValues[i].parameters.length > 0) {
                    hasParameter = true;
                    return hasParameter;
                } else {
                    hasParameter = false;
                }
            }
        }
    }
    return hasParameter;
};

let createServiceFunction: Function = (paths: any, servicesDirPath: string) => {

    let pathsKeys: any[] = Object.keys(paths);
    let i: number = 0;

    for (let urlPath of pathsKeys) {
        let serviceName: string = urlPath.slice(1, urlPath.length);
        let urlServiceName: string = serviceName.split('/')[0];
        serviceName = str.capitalize(urlServiceName);

        console.log(`-----------${serviceName}SERVICE-------------`);

        let type: string = 'directory';
        serviceName = `${serviceName}Service`;
        element.describeControl(`${servicesDirPath}/${serviceName}`, type);

        type = 'file';
        let extension: string = '.ts';
        let servicePath: string = `${servicesDirPath}/${serviceName}/${serviceName}${extension}`;

        element.describeControl(servicePath, type);

        //CASE 1---SERVICE
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }

        let methodValues: any[] = Object.values(paths[urlPath]);
        let methodTypes: any[] = Object.keys(paths[urlPath]);

        //todo: metodların hepsini dolaş ve 1 tane bile parametre varsa Import et. hiç yoksa Import etme ve interface oluşturma
        //todo: Kontrol metodu yaz.

        let hasParameter: boolean = true;
        // continue;

        hasParameter = hasParameterInService(paths, urlServiceName);

        let IServicePath: string = '';
        let serviceInterfaceName: string = '';

        if (hasParameter === true) {
            ////////////*****************************

            // // // //IMPORT INTERFACE
            serviceInterfaceName = `I${serviceName}`;
            //
            // break;
            //FOR INTERFACES
            IServicePath = `${servicesDirPath}/${serviceName}/${serviceInterfaceName}${extension}`;

            element.describeControl(IServicePath, type);
            //CASE 2---FOR INTERFACES
            createElement(IServicePath, '');//for follow to json changes
            ////////////*****************************
        }

        let importCode: any = importCodeToMethod(serviceInterfaceName, hasParameter);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        createElement(servicePath, importCode);//for follow to json changes

        // //CASE 2---SERVICE
        // createElement(servicePath, '');//for follow to json changes


        let i: number = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {

            // console.log("methodValues : ", methodValues[i]);
            // console.log("url { control: ", urlPath.includes('{'));
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }


            let methodCode: string = createMethod(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            addItemToService(servicePath, methodCode);
            // break;
        }
        // break;
    }
};

module.exports.createServiceFunction = createServiceFunction;