const str: any = require('../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalParamsObjectName: string): any => {

    let params: string = '';
    let paramsItem: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        if (parameter.in.toLowerCase() === 'query') {
            editedParamName = str.nameSymbolFilter(parameter.name);

            if (parameter.required === false) {
                paramsItem = `...(typeof ${paramsName}.${str.lowerLetter(editedParamName)} !== 'undefined' ? {${str.lowerLetter(editedParamName)}: ${paramsName}.${str.lowerLetter(editedParamName)}} : {})`;
                params = params + ',\n\t\t' + paramsItem;
            }
        }
    }

    params = params.slice(3, params.length);

    return (
        `\n\tlet ${optionalParamsObjectName}: any = {
    ${params}                    
    };`
    );
};