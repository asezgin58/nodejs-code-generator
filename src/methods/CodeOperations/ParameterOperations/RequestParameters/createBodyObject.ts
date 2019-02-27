const str: any = require('../../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalParamsObjectName: string, hasOptional: boolean): any => {

    let params: string = '';
    let paramsItem: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        editedParamName = str.nameSymbolFilter(parameter.name);

        if (parameter.required === true) {
            paramsItem = str.lowerLetter(editedParamName) + `: ${paramsName}.${str.lowerLetter(editedParamName)}`;
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }

    params = params.slice(7, params.length);

    if (hasOptional === true && params.length > 0) {
        return (
            `body: {
                    ${params},
                    ...${optionalParamsObjectName}
                },`
        );
    }

    if (params.length > 0 && hasOptional === false) {
        return (
            `body: {                    
                    ${params}
                },`
        );
    }

    if (hasOptional === true) {
        return (
            `body: {                    
                    ...${optionalParamsObjectName}
                },`
        );
    }
};