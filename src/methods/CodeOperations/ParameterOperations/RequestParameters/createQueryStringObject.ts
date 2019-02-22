const str: any = require('../../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalParamsObjectName: string, hasOptional: boolean): any => {

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