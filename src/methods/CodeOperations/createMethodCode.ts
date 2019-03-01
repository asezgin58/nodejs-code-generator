import addCode from "./addCode";
import createMethodName from "./createMethodName";
import createQueryParamsVariable from "./createQueryParamsVariable";
import optionalParameterExistControl from "./ParameterOperations/ControlOperations/optionalParameterExistControl";
import pathParameterExistControl from "./ParameterOperations/ControlOperations/pathParameterExistControl";
import queryParameterExistControl from "./ParameterOperations/ControlOperations/queryParameterExistControl";
import optionalQueryParameterExistControl from "./ParameterOperations/ControlOperations/optionalQueryParameterExistControl";
import optionalBodyParameterExistControl from "./ParameterOperations/ControlOperations/optionalBodyParameterExistControl";
import bodyParameterExistControl from "./ParameterOperations/ControlOperations/bodyParameterExistControl";
import createMethodParameters from "./ParameterOperations/createMethodParameters";
import createInterfaceParameters from "./ParameterOperations/createInterfaceParameters";
import createOptionalParametersObjectForQuery from "./ParameterOperations/createOptionalParametersObjectForQuery";
import createOptionalParametersObjectForBody from "./ParameterOperations/createOptionalParametersObjectForBody";
import createBodyObject from "./ParameterOperations/RequestParameters/createBodyObject";
import createPathParameter from "./ParameterOperations/RequestParameters/createPathParameter";

require('dotenv').config();

const str: any = require('../StringOperations/strMethods');

export default (urlPath: string, methodType: string, methodValues: any, IServicePath: any, serviceInterfaceName: string): any => {

    let methodName: string = str.lowerLetter(createMethodName(methodType, methodValues));
    methodName = str.nameSymbolFilter(methodName);
    // console.log(`------------${methodName}---------\n`);

    let methodParams: string = methodValues.parameters.length > 0 ? createMethodParameters(methodValues.parameters) : '';

    //FOR INTERFACE*****************************************************
    let methodInterfaceName: string = '';
    let responseInterfaceName: string = '';
    if (methodParams.length > 0) {
        methodInterfaceName = 'I' + str.capitalize(methodName);
        let interfaceParamsCode: any = createInterfaceParameters(methodInterfaceName, responseInterfaceName, methodParams);
        addCode(IServicePath, interfaceParamsCode);
    }
    //END-FOR INTERFACE**************************************************

    //***Method Parameter Template
    let paramsName: string = 'params';
    let optionalQueryParamsObjectName: string = '';
    let optionalBodyParamsObjectName: string = '';

    let methodParamsTemplate: string = '';
    if (methodParams.length > 0) {
        methodParamsTemplate = `${paramsName}: ${serviceInterfaceName}.${methodInterfaceName}`;
    }
    //***End-Method Parameter Template

    //***Control Methods
    let hasOptional: boolean = optionalParameterExistControl(methodValues.parameters);
    let hasOptionalQueryParameter: boolean = optionalQueryParameterExistControl(methodValues.parameters);
    let hasOptionalBodyParameter: boolean = optionalBodyParameterExistControl(methodValues.parameters);
    let hasQueryParameter: boolean = queryParameterExistControl(methodValues.parameters);
    let hasBodyParameter: boolean = bodyParameterExistControl(methodValues.parameters);
    let hasPathParameter: boolean = pathParameterExistControl(methodValues.parameters);
    //***End-Control Methods

    //***Optional Parameters
    optionalQueryParamsObjectName = 'optionalParametersForQuery';
    let optionalParameterObjectForQuery: any = '';
    if (methodParams.length > 0 && hasOptionalQueryParameter === true) {
        optionalParameterObjectForQuery = createOptionalParametersObjectForQuery(methodValues.parameters, paramsName, optionalQueryParamsObjectName);
    }
    optionalBodyParamsObjectName = 'optionalParametersForBody';
    let optionalParameterObjectForBody: any = '';
    if (methodParams.length > 0 && hasOptionalBodyParameter === true) {
        optionalParameterObjectForBody = createOptionalParametersObjectForBody(methodValues.parameters, paramsName, optionalBodyParamsObjectName);
    }
    //***End-Optional Parameters

    //***With Query Parameters
    let queryParamsVariableName: string = '';
    let queryParameter: string = '';
    let queryParamsDescribeCode: string = '';

    if (hasQueryParameter === true) {
        if (methodParams.length > 0) {
            queryParamsVariableName = 'queryParams';
            queryParamsDescribeCode = createQueryParamsVariable(queryParamsVariableName, optionalQueryParamsObjectName, methodValues, paramsName, hasQueryParameter);
        }

        if (queryParamsVariableName.length > 0) {
            queryParameter = ` + ${queryParamsVariableName}`;
        }
    }
    //***End-With Query Parameters

    //***Body Object Parameter
    let bodyObject: any = '';
    if (hasBodyParameter === true) {
        if ((methodType.toLowerCase() === 'post' || methodType.toLowerCase() === 'put') && methodParams.length > 0) {
            bodyObject = createBodyObject(methodValues.parameters, paramsName, optionalBodyParamsObjectName, hasOptionalBodyParameter);
        }
    }
    //***End-Body Object Parameter

    // if (methodName === 'fileUploadAsync') {
    //     console.log("queryParam : ", hasQueryParameter);
    //     console.log("BodyParam : ", hasBodyParameter);
    // }

    //***With Path Parameters
    let pathParameter: string = '';
    if (hasPathParameter === true) {
        pathParameter = createPathParameter(methodValues.parameters, paramsName);
    }
    //***End-With Path Parameters

    return (
        `export const ${methodName} = (${methodParamsTemplate}) => {        
    ${optionalParameterObjectForQuery}
    ${optionalParameterObjectForBody}
    ${queryParamsDescribeCode}    
    return (
        krax({
            name: '${str.capitalize(methodValues.tags[0])}',
            request: {
                url: \`${process.env.SERVICE_URL}${urlPath}${pathParameter}\`${queryParameter},
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