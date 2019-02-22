const str: any = require('../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string, optionalParamsObjectName: string): any => {

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