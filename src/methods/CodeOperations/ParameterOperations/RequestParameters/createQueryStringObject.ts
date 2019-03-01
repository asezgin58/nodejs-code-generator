const str: any = require('../../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalQueryParamsObjectName: string, hasQueryParameter: boolean): any => {

    let params: string = '';
    let paramsItem: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        editedParamName = str.nameSymbolFilter(parameter.name);

        if (parameter.required === true && parameter.in.toLowerCase() === 'query') {
            paramsItem = str.lowerLetter(editedParamName) + `: ${paramsName}.${str.lowerLetter(editedParamName)}`;
            params = params + ', ' + paramsItem;
        }
    }

    params = params.slice(2, params.length);

    if (hasQueryParameter === true && params.length > 0) {
        return (
            `{${params}, ...${optionalQueryParamsObjectName}}`
        );
    }

    if (hasQueryParameter === false && params.length > 0) {
        return (
            `{${params}}`
        );
    }

    if (hasQueryParameter === true) {
        return (
            `{...${optionalQueryParamsObjectName}}`
        );
    }
};