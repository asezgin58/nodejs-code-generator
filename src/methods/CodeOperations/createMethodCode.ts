import addCode from "./addCode";
import createMethodName from "./createMethodName";
import createQueryParamsVariable from "./createQueryParamsVariable";
import optionalParameterExistControl from "./ParameterOperations/ControlOperations/optionalParameterExistControl";
import pathParameterExistControl from "./ParameterOperations/ControlOperations/pathParameterExistControl";
import createMethodParameters from "./ParameterOperations/createMethodParameters";
import createInterfaceParameters from "./ParameterOperations/createInterfaceParameters";
import createOptionalParametersObject from "./ParameterOperations/createOptionalParametersObject";
import createBodyObject from "./ParameterOperations/RequestParameters/createBodyObject";

require('dotenv').config();

const str: any = require('../StringOperations/strMethods');

// //todo:FOR RESPONSE 1
// let createInterfaceResponseCode: Function = (interfaceName: string, responseInterfaceName: string, responseParams: any): any => {
//     return `export interface ${responseInterfaceName} {
//     ${responseParams}
// }\n\n`;
// };

export default (urlPath: string, methodType: string, methodValues: any, IServicePath: any, serviceInterfaceName: string): any => {

    let methodName: string = str.lowerLetter(createMethodName(methodType, methodValues));
    methodName = str.nameSymbolFilter(methodName);
    // console.log(`------------${methodName}---------\n`);

    let methodParams: string = methodValues.parameters.length > 0 ? createMethodParameters(methodValues.parameters) : '';

    // //todo:FOR RESPONSE 2
    // let methodResponseParams: any = Object.keys(methodValues.responses['200']) + ': string';

    //FOR INTERFACE*****************************************************
    let methodInterfaceName: string = '';
    let responseInterfaceName: string = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName);
        let interfaceParamsCode: any = createInterfaceParameters(methodInterfaceName, responseInterfaceName, methodParams);
        addCode(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************

    let paramsName: string = 'params';

    let methodParamsTemplate: string = '';
    if (methodParams.length > 0) {
        methodParamsTemplate = `${paramsName}: ${serviceInterfaceName}.${methodInterfaceName}`;
    }

    let optionalParamsObjectName: string = 'optionalParameters';
    let hasOptional: boolean = optionalParameterExistControl(methodValues.parameters);

    let optionalParameterObject: any = '';
    if (methodParams.length > 0 && hasOptional === true) {
        optionalParameterObject = createOptionalParametersObject(methodValues.parameters, paramsName, optionalParamsObjectName);
    }

    let queryParamsVariableName: string = '';
    if ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0) {
        queryParamsVariableName = 'queryParams';
    }

    let queryParamsDescribeCode: string = '';
    if ((methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0) {
        queryParamsDescribeCode = createQueryParamsVariable(queryParamsVariableName, optionalParamsObjectName, methodValues, paramsName, hasOptional);
    }

    let bodyObject: any = '';
    if ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0) {
        bodyObject = createBodyObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional);
    }

    let hasPathParameter: boolean = pathParameterExistControl(methodValues.parameters);
    let pathParameter: string = '';
    // if (hasPathParameter === true) {
    //     pathParameter = createPathParameter(methodValues.parameters);
    // }

    return (
        `export const ${methodName} = (${methodParamsTemplate}) => {        
    ${optionalParameterObject}
    ${queryParamsDescribeCode}    
    return (
        krax({
            name: '${str.capitalize(methodValues.tags[0])}',
            request: {
                url: \`${process.env.SERVICE_URL}${urlPath}${pathParameter}\`${queryParamsVariableName.length > 0 ? ` + ${queryParamsVariableName}` : queryParamsVariableName},
                method: '${methodType.toUpperCase()}',
                ${bodyObject}
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('Error :', err);
                console.log('State :', state);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};\n\n`
    );
}