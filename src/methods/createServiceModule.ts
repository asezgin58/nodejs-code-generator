import createElement from "./createElement";
import createMethod from "./createMethod";
import addMethodToService from "./addMethodToService";
// import str from "./strMethods";

const element: any = require('./createElementControl');
let str: any = require('./strMethods');


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

        //CASE 1
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }

        //CASE 2
        createElement(servicePath, '');//for follow to json changes

        //FOR INTERFACES
        let IServicePath: string = `${servicesDirPath}/${serviceName}/I${serviceName}${extension}`;

        element.describeControl(IServicePath, type);

        //CASE 2---FOR INTERFACES
        createElement(IServicePath, '');//for follow to json changes

        let methodValues: any[] = Object.values(paths[urlPath]);
        let methodTypes: any[] = Object.keys(paths[urlPath]);

        let i: number = 0;
        for (i = 0; i < methodValues.length; i++) {

            let methodCode: any = createMethod(urlPath, methodTypes[i], methodValues[i]);
            addMethodToService(servicePath, methodCode);
        }
    }
};
module.exports.createServiceFunction = createServiceFunction;