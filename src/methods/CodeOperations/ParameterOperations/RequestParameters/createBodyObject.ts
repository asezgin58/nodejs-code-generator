const str: any = require('../../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalBodyParamsObjectName: string, hasOptionalBodyParameter: boolean): any => {

    let params: string = '';
    let paramsItem: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        editedParamName = str.nameSymbolFilter(parameter.name);

        if (parameter.required === true && parameter.in.toLowerCase() === 'body' || parameter.in.toLowerCase() === 'formdata') {
            paramsItem = str.lowerLetter(editedParamName) + `: ${paramsName}.${str.lowerLetter(editedParamName)}`;
            params = params + ',\n\t\t\t\t\t' + paramsItem;
        }
    }

    params = params.slice(7, params.length);

    if (hasOptionalBodyParameter === true && params.length > 0) {
        return (
            `body: {
                    ${params},
                    ...${optionalBodyParamsObjectName}
                },`
        );
    }

    if (hasOptionalBodyParameter === false && params.length > 0) {
        return (
            `body: {                    
                    ${params}
                },`
        );
    }

    if (hasOptionalBodyParameter === true) {
        return (
            `body: {                    
                    ...${optionalBodyParamsObjectName}
                },`
        );
    }
};