import createItem from "../ItemOperations/createItem";
import createMethodCode from "../CodeOperations/createMethodCode";
import createImportCode from "../CodeOperations/createImportCode";
import addCode from "../CodeOperations/addCode";
import itemExistControl from "../ItemOperations/itemExistControl";
import serviceParameterExistControl from "../CodeOperations/ParameterOperations/ControlOperations/serviceParameterExistControl";
import serviceQueryParameterExistControl from "../CodeOperations/ParameterOperations/ControlOperations/serviceQueryParameterExistControl";

const str: any = require('../StringOperations/strMethods');

export default (paths: any, servicesDirPath: string) => {
    let pathsKeys: any[] = Object.keys(paths);

    for (let urlPath of pathsKeys) {

        let serviceName: string = urlPath.slice(1, urlPath.length);
        let urlServiceName: string = serviceName.split('/')[0];

        urlServiceName = str.nameSymbolFilter(urlServiceName);
        serviceName = str.capitalize(urlServiceName);

        // console.log(`-----------${serviceName}SERVICE-------------`);

        let type: string = 'directory';
        serviceName = `${serviceName}Service`;
        itemExistControl(`${servicesDirPath}/${serviceName}`, type);

        type = 'file';
        let extension: string = '.ts';
        let servicePath: string = `${servicesDirPath}/${serviceName}/${serviceName}${extension}`;

        itemExistControl(servicePath, type);

        //For Methods
        let methodValues: any[] = Object.values(paths[urlPath]);
        let methodTypes: any[] = Object.keys(paths[urlPath]);

        let hasParameter: boolean = serviceParameterExistControl(paths, urlServiceName);
        let hasQueryParameter: boolean = false;
        let IServicePath: string = '';
        let serviceInterfaceName: string = '';

        if (hasParameter === true) {
            //For Import Query-String
            hasQueryParameter = serviceQueryParameterExistControl(paths, urlServiceName);

            // // // //IMPORT INTERFACE
            serviceInterfaceName = `I${serviceName}`;
            //
            // break;
            //FOR INTERFACES
            IServicePath = `${servicesDirPath}/${serviceName}/${serviceInterfaceName}${extension}`;

            itemExistControl(IServicePath, type);
            //CASE 2---FOR INTERFACES
            createItem(IServicePath, '');//for follow to json changes
        }

        //Create ImportCode
        let importCode: any = createImportCode(serviceInterfaceName, hasParameter, hasQueryParameter);

        // Add IMPORT CODES to file
        createItem(servicePath, importCode);//for follow to json changes

        let methodsCodes: string = '';
        let i: number = 0;
        // continue;
        for (i = 0; i < methodValues.length; i++) {

            // console.log("methodValues : ", methodValues[i]);
            if (urlPath.includes('/{') === true) {
                urlPath = urlPath.slice(0, urlPath.indexOf('/{'));
            }
            let methodCode: string = createMethodCode(urlPath, methodTypes[i], methodValues[i], IServicePath, serviceInterfaceName);
            methodsCodes = methodsCodes + methodCode;
            // break;
        }

        addCode(servicePath, methodsCodes);
        // break;
    }
};