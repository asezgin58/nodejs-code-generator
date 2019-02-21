import createElement from "./createElement";
import createMethod from "./createMethod";
import addItemToService from "./addItemToService";
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

let importInterfaceCodeMethod: Function = (interfaceName: any): any => {
    return `import * as ${interfaceName} from './${interfaceName}';
import {krax} from "react-krax";
const queryString = require('query-string');\n\n`;

    // return `import {krax} from "react-krax/lib";\n\n`;
};

let createServiceFunction: Function = (paths: any, servicesDirPath: string) => {

    let pathsKeys: any[] = Object.keys(paths);
    // let pathsValues: any[] = Object.values(paths);
    let i: number = 0;

    for (let urlPath of pathsKeys) {

        let serviceName: string = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];
        serviceName = str.capitalize(serviceName);

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

        // // // //IMPORT INTERFACE
        let serviceInterfaceName: string = `I${serviceName}`;
        let importInterfaceCode: any = importInterfaceCodeMethod(serviceInterfaceName);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        createElement(servicePath, importInterfaceCode);//for follow to json changes

        // //CASE 2---SERVICE
        // createElement(servicePath, '');//for follow to json changes

        //
        // break;
        //FOR INTERFACES
        let IServicePath: string = `${servicesDirPath}/${serviceName}/${serviceInterfaceName}${extension}`;

        element.describeControl(IServicePath, type);
        //CASE 2---FOR INTERFACES
        createElement(IServicePath, '');//for follow to json changes

        let methodValues: any[] = Object.values(paths[urlPath]);
        let methodTypes: any[] = Object.keys(paths[urlPath]);

        let i: number = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {

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