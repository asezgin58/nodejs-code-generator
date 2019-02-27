const str: any = require('../../StringOperations/strMethods');

export default (methodParameters: any): string => {

    let params: string = '';
    let paramsItem: string = '';
    let paramsUnReq: string = '';
    let editedParamName: string = '';

    for (let parameter of methodParameters) {
        editedParamName = str.editNameWithSymbol(parameter.name);

        if (parameter.required === true) {
            paramsItem = str.lowerLetter(editedParamName) + `: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            params = params + ', ' + paramsItem;
        } else {
            paramsItem = str.lowerLetter(editedParamName) + `?: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            paramsUnReq = paramsUnReq + ', ' + paramsItem;
        }
    }
    params = params.slice(2, params.length);

    return params.length > 0 ? params + paramsUnReq : paramsUnReq.slice(2, paramsUnReq.length);
};