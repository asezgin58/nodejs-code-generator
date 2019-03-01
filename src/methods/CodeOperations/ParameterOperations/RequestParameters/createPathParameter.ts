const str: any = require('../../../StringOperations/strMethods');

export default (methodParameters: any, paramsName: string): any => {

    let params: string = '';
    let paramsItem: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        editedParamName = str.nameSymbolFilter(parameter.name);

        if (parameter.in.toLowerCase() === 'path') {
            paramsItem = `/\$\{${paramsName}.${str.lowerLetter(editedParamName)}\}`;
            params = params + paramsItem;
        }
    }

    return params;
};