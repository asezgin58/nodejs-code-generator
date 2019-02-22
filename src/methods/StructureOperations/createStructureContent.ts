import createItem from "../ItemOperations/createItem";
import createMethodCode from "../CodeOperations/createMethodCode";
import createImportCode from "../CodeOperations/createImportCode";
import addCode from "../CodeOperations/addCode";
import itemExistControl from "../ItemOperations/itemExistControl";
// import {string} from "prop-types";

const str: any = require('../StringOperations/strMethods');

let parameterExistControl: Function = (paths: any, urlPathParam: string): any => {
    let hasParameter: boolean = true;
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

export default (paths: any, servicesDirPath: string) => {
    let pathsKeys: any[] = Object.keys(paths);

    for (let urlPath of pathsKeys) {
        let serviceName: string = urlPath.slice(1, urlPath.length);
        let urlServiceName: string = serviceName.split('/')[0];
        serviceName = str.capitalize(urlServiceName);

        // console.log(`-----------${serviceName}SERVICE-------------`);

        let type: string = 'directory';
        serviceName = `${serviceName}Service`;
        itemExistControl(`${servicesDirPath}/${serviceName}`, type);

        type = 'file';
        let extension: string = '.ts';
        let servicePath: string = `${servicesDirPath}/${serviceName}/${serviceName}${extension}`;

        itemExistControl(servicePath, type);

        //CASE 1---SERVICE
        // tanımlı olup olmadığını kontrol edebilmek için
        // if (element.isDescribe === false) {
        //     createElement(servicePath, ''); //files are creating.
        // } else {
        //     createElement(servicePath, '');
        // }

        let methodValues: any[] = Object.values(paths[urlPath]);
        let methodTypes: any[] = Object.keys(paths[urlPath]);

        let hasParameter: boolean = parameterExistControl(paths, urlServiceName);

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

            itemExistControl(IServicePath, type);
            //CASE 2---FOR INTERFACES
            createItem(IServicePath, '');//for follow to json changes
            ////////////*****************************
        }

        let importCode: any = createImportCode(serviceInterfaceName, hasParameter);
        // importInterface(servicePath, importInterfaceCode);
        //
        // //CASE 2---SERVICE
        createItem(servicePath, importCode);//for follow to json changes

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

            let methodCode: string = createMethodCode(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            addCode(servicePath, methodCode);
            // break;
        }
        // break;
    }
};