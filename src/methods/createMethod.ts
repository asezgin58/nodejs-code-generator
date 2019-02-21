const app: any = require("../app");
const str: any = require('./strMethods');
import addItemToService from "./addItemToService";

let createMethodParameters: Function = (methodParameters: any): string => {

    let params: string = '';
    let paramsItem: string = '';
    let paramsUnReq: string = '';

    for (let parameter of methodParameters) {

        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + `: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            params = params + ', ' + paramsItem;
        } else {
            paramsItem = str.lowerLetter(parameter.name) + `?: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            paramsUnReq = paramsUnReq + ', ' + paramsItem;
        }
    }
    params = params.slice(2, params.length);

    return params.length > 0 ? params + paramsUnReq : paramsUnReq.slice(2, paramsUnReq.length);
};

let createInterfaceParamsCode: Function = (interfaceName: string, responseInterfaceName: string, params: any): any => {

    let paramsArray: any = params.split(', ');

    params = '';

    for (let i = 0; i < paramsArray.length; i++) {
        params = params + ',\n\t' + paramsArray[i];
    }

    params = params.slice(2, params.length);

    return `export interface ${interfaceName} {
${params}
}\n\n`;

};

let createBodyObject: Function = (methodParameters: any, paramsName: string, optionalParamsObjectName: string): any => {

    let params: string = '';
    let paramsItem: string = '';

    for (let parameter of methodParameters) {
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + `: ${paramsName}.${str.lowerLetter(parameter.name)}`;
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }

    params = params.slice(7, params.length);

    if (params.length > 0) {
        return (
            `body: {
                    ${params},
                    ...${optionalParamsObjectName}
                },`
        );
    } else {
        return (
            `body: {                    
                    ...${optionalParamsObjectName}
                },`
        );
    }
};

let createQueryObject: Function = (methodParameters: any, paramsName: string, optionalParamsObjectName: string, hasOptional: boolean): any => {

    let params: string = '';
    let paramsItem: string = '';

    for (let parameter of methodParameters) {
        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + `: ${paramsName}.${str.lowerLetter(parameter.name)}`;
            params = params + ', ' + paramsItem;
        }
    }

    params = params.slice(2, params.length);

    if (hasOptional === true && params.length > 0) {
        return (
            `{${params}, ...${optionalParamsObjectName}}`
        );
    }

    if (params.length > 0 && hasOptional === false) {
        return (
            `{${params}}`
        );
    }

    if (hasOptional === true) {
        return (
            `{...${optionalParamsObjectName}}`
        );
    }
};


let createOptionalParametersObject: Function = (methodParameters: any, paramsName: string, optionalParamsObjectName: string): any => {

    let params: string = '';
    let paramsItem: string = '';

    for (let parameter of methodParameters) {
        if (parameter.required === false) {
            paramsItem = `...(typeof ${paramsName}.${str.lowerLetter(parameter.name)} !== 'undefined' ? {${str.lowerLetter(parameter.name)}: ${paramsName}.${str.lowerLetter(parameter.name)}} : {})`;
            params = params + ',\n\t\t' + paramsItem;
        }
    }

    params = params.slice(3, params.length);

    return (
        `\n\tlet ${optionalParamsObjectName}: any = {
    ${params}                    
    };\n`
    );
};

let hasOptionalParamControl: Function = (methodParameters: any): boolean => {

    let hasOptional: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.required === false) {
            hasOptional = true;
            return hasOptional;
        } else {
            hasOptional = false;
        }
    }
    return hasOptional;
};

// //todo:FOR RESPONSE 1
// let createInterfaceResponseCode: Function = (interfaceName: string, responseInterfaceName: string, responseParams: any): any => {
//     return `export interface ${responseInterfaceName} {
//     ${responseParams}
// }\n\n`;
// };

let createMethodName: Function = (methodType: string, methodValues: any): string => {

    let tag: string = str.capitalize(methodValues.tags[0]);

    if (methodType.toLowerCase() === 'get') {

        if (methodValues.parameters.length === 1) {
            return `${methodValues.operationId}${tag}By${str.capitalize(methodValues.parameters[0].name)}`;

        } else if (methodValues.operationId.toLowerCase() === 'get') {

            return `${methodValues.operationId}${tag}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'post') {

        if (methodValues.operationId.toLowerCase() === 'post') {
            return `set${tag}`;
        } else if (methodValues.operationId.toLowerCase() === 'delete') {
            return `remove${tag}`;
        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'put') {

        if (methodValues.operationId.toLowerCase() === 'put') {

            return `update${tag}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'delete') {

        if (methodValues.operationId.toLowerCase() === 'delete') {

            return `remove${tag}`

        } else {
            return methodValues.operationId;
        }
    }
};

export default (urlPath: string, methodType: string, methodValues: any, IServicePath: any, serviceInterfaceName: string): any => {

    let methodName: string = str.lowerLetter(createMethodName(methodType, methodValues));
    // console.log(`------------${methodName}---------\n`);

    let methodParams: string = methodValues.parameters.length > 0 ? createMethodParameters(methodValues.parameters) : '';

    // //todo:FOR RESPONSE 2
    // let methodResponseParams: any = Object.keys(methodValues.responses['200']) + ': string';

    //FOR INTERFACE*****************************************************
    let methodInterfaceName: string = '';
    let responseInterfaceName: string = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName) + 'Params';
        let interfaceParamsCode: any = createInterfaceParamsCode(methodInterfaceName, responseInterfaceName, methodParams);
        addItemToService(IServicePath, interfaceParamsCode);
    }
    // //todo:FOR RESPONSE 3
    // responseInterfaceName = methodName + 'Response';
    // let interfaceResponseCode: any = createInterfaceResponseCode(interfaceName, responseInterfaceName, methodParams, methodResponseParams);
    // addItemToService(IServicePath, interfaceResponseCode);
    //END-FOR INTERFACE**************************************************

    let paramsName: string = 'params';
    let optionalParamsObjectName: string = 'optionalParameters';
    let hasOptional: boolean = hasOptionalParamControl(methodValues.parameters);

    return (
        `export const ${methodName} = (${methodParams.length > 0 ? `${paramsName}: ${serviceInterfaceName}.${methodInterfaceName}` : ''}) => {        
    ${methodParams.length > 0 && hasOptional === true ? createOptionalParametersObject(methodValues.parameters, paramsName, optionalParamsObjectName) : ''}    
    return (
        krax({
            name: '${str.capitalize(methodValues.tags[0])}',
            request: {
                url: '${app.serviceUrl}${(methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? urlPath + '?' : urlPath}'${(methodType.toLowerCase() === 'get' || methodType.toLowerCase() === 'delete') && methodParams.length > 0 ? ` + queryString.stringify(${createQueryObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional)})` : ''},
                method: '${methodType.toUpperCase()}',
                ${methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put' && methodParams.length > 0 ? createBodyObject(methodValues.parameters, paramsName, optionalParamsObjectName) : ''}
                headers: {}
            },                
            onSuccess: (state: any) => {
                console.log('Success...');
                console.log('State : ', state);
            },
            onError: (state: any, err: any) => {
                console.log('State :', state);
                console.log('Error :', err);
            },
            onBefore: (state: any) => {
                console.log('onBefore-State : ', state);
            }
        })
	);
};\n\n`
    );
}