import createQueryStringObject from "./ParameterOperations/RequestParameters/createQueryStringObject";

export default (queryParamsVariableName: string, optionalQueryParamsObjectName: string, methodValues: any, paramsName: string, hasQueryParameter: boolean) => {
    return `let ${queryParamsVariableName}: any = queryString.stringify(${createQueryStringObject(methodValues.parameters, paramsName, optionalQueryParamsObjectName, hasQueryParameter)});
    if (${queryParamsVariableName}.length > 0) {
        ${queryParamsVariableName} = '?' + ${queryParamsVariableName};
    }\n`;
};
