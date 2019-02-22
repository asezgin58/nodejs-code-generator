import createQueryStringObject from "./ParameterOperations/RequestParameters/createQueryStringObject";

export default (queryParamsVariableName: string, optionalParamsObjectName: string, methodValues: any, paramsName: string, hasOptional: boolean) => {
    return `let ${queryParamsVariableName}: any = queryString.stringify(${createQueryStringObject(methodValues.parameters, paramsName, optionalParamsObjectName, hasOptional)});
    if (${queryParamsVariableName}.length > 0) {
        ${queryParamsVariableName} = '?' + ${queryParamsVariableName};
    }\n`;
};
