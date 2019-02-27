import addCode from "./addCode";
import createMethodName from "./createMethodName";
import createQueryParamsVariable from "./createQueryParamsVariable";
import optionalParameterExistControl from "./ParameterOperations/optionalParameterExistControl";
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
        methodInterfaceName = 'I' + str.capitalize(methodName) + 'Params';
        let interfaceParamsCode: any = createInterfaceParameters(methodInterfaceName, responseInterfaceName, methodParams);
        addCode(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************

    let paramsName: string = 'params';
    let optionalParamsObjectName: string = 'optionalParameters';
    let hasOptional: boolean = optionalParameterExistControl(methodValues.parameters);
    let queryParamsVariableName: string = 'queryParams';

    return (
        `export const ${methodName} = (${methodParams.length > 0 ? `${paramsName}: ${serviceInterfaceName}.${methodInterfaceName}` : ''}) => {        
    ${methodParams.length > 0 && hasOptional === true ? createOptionalParametersObject(methodValues.parameters, paramsName, optionalParamsObjectName) : ''}
    ${(methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? createQueryParamsVariable(queryParamsVariableName, optionalParamsObjectName, methodValues, paramsName, hasOptional) : ''}    
    return (
        krax({
            name: '${str.capitalize(methodValues.tags[0])}',
            request: {
                url: '${process.env.SERVICE_URL}${urlPath}'${(methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? ` + ${queryParamsVariableName}` : ''},
                method: '${methodType.toUpperCase()}',
                ${(methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0 ? createBodyObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional) : ''}
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