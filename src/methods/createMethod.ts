const app: any = require("../app");
const str: any = require('./strMethods');

let createMethodParameters: Function = (methodParameters: any): string => {

    let params: string = '';
    let paramsItem: string = '';
    let paramsUnReq: string = '';

    for (let parameter of methodParameters) {

        if (parameter.required === true) {
            paramsItem = str.lowerLetter(parameter.name) + `: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            params = params + ', ' + paramsItem;
        } else {
            paramsItem = str.lowerLetter(parameter.name) + `?: ${ parameter.in === 'body' || parameter.in === 'formData' ? 'any' : (parameter.type === 'integer' ? 'number' : (parameter.type === 'array' ? 'any' : parameter.type))}`;
            paramsUnReq = paramsUnReq + ', ' + paramsItem;
        }
    }

    params = params.slice(2, params.length);
    return params.length > 0 ? params + paramsUnReq : paramsUnReq.slice(2, paramsUnReq.length);
};

let createMethodName: Function = (methodType: string, methodValues: any): string => {

    if (methodType.toLowerCase() === 'get') {

        if (methodValues.parameters.length === 1) {
            return `${methodValues.operationId}${str.capitalize(methodValues.tags[0])}By${str.capitalize(methodValues.parameters[0].name)}`;

        } else if (methodValues.operationId.toLowerCase() === 'get') {

            return `${methodValues.operationId}${str.capitalize(methodValues.tags[0])}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'post') {

        if (methodValues.operationId.toLowerCase() === 'post') {

            return `set${str.capitalize(methodValues.tags[0])}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'put') {

        if (methodValues.operationId.toLowerCase() === 'put') {

            return `update${str.capitalize(methodValues.tags[0])}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'delete') {

        if (methodValues.operationId.toLowerCase() === 'delete') {

            return `remove${str.capitalize(methodValues.tags[0])}`

        } else {
            return methodValues.operationId;
        }
    }
};

export default (urlPath: string, methodType: string, methodValues: any): any => {

    let methodName: string = createMethodName(methodType, methodValues);

    return `export function ${str.lowerLetter(methodName)}(${methodValues.parameters.length > 0 ? createMethodParameters(methodValues.parameters) : ''}) {\n\treturn (\n\t\tfetch('${app.serviceUrl}${urlPath}', { method: '${methodType}' })\n\t\t\t.then((res) => {\n\t\t\t\treturn res;\n\t\t\t})\n\t\t\t.catch((err) => {\n\t\t\t\tconsole.log('Error :', err);\n\t\t\t})
	);\n}\n\n`
}


// export interface GetByCompanyKeyResponse {
//     a: string,
//     b: number
// }
//
// export async function GetByCompanyKey(companyKey: string): Promise<GetByCompanyKeyResponse> {
//
//     const x:T = await fetch()
// }

