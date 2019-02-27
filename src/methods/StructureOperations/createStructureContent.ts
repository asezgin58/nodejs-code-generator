import createItem from "../ItemOperations/createItem";
import createMethodCode from "../CodeOperations/createMethodCode";
import createImportCode from "../CodeOperations/createImportCode";
import addCode from "../CodeOperations/addCode";
import itemExistControl from "../ItemOperations/itemExistControl";
import serviceParameterExistControl from "../CodeOperations/ParameterOperations/serviceParameterExistControl";

const str: any = require('../StringOperations/strMethods');

// import fs = require('fs')
// // Create Item
// let readServiceFile: Function = (path: string): any => {
//     return fs.readFileSync(`${path}`, 'utf8');
// };

export default (paths: any, servicesDirPath: string) => {
    let pathsKeys: any[] = Object.keys(paths);

    // let prevServiceName: string = '';

    // let counter: number = 0;

    for (/*counter = 0; counter < pathsKeys.length; counter++*/ let urlPath of pathsKeys) {
        // let urlPath: any = pathsKeys[counter];
        let serviceName: string = urlPath.slice(1, urlPath.length);
        let urlServiceName: string = serviceName.split('/')[0];

        urlServiceName = str.editNameWithSymbol(urlServiceName);
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

        let hasParameter: boolean = serviceParameterExistControl(paths, urlServiceName);

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

        // Add IMPORT CODES to file
        createItem(servicePath, importCode);//for follow to json changes

        // let fileContent: any = readServiceFile(servicePath);//needn't.
        //
        // console.log("State : ", fileContent);
        //
        // break;

        // //CASE 2---SERVICE
        // createItem(servicePath, '');//for follow to json changes

        let methodsCodes: string = '';
        let i: number = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {

            // console.log("methodValues : ", methodValues[i]);
            // console.log("url { control: ", urlPath.includes('{'));
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }

            let methodCode: string = createMethodCode(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            methodsCodes = methodsCodes + methodCode;
            // break;
        }
        // // this code block needn't.
        // if (!fileContent.includes(importCode)) {
        //     addCode(servicePath, importCode);
        // }
        addCode(servicePath, methodsCodes);
        // break;
    }
};