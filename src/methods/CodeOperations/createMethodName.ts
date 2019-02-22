const str: any = require('../StringOperations/strMethods');

export default (methodType: string, methodValues: any): string => {

    let tag: string = str.capitalize(methodValues.tags[0]);

    if (methodType.toLowerCase() === 'get') {

        if (methodValues.parameters.length === 1) {
            return `${methodValues.operationId}${tag}By${str.capitalize(methodValues.parameters[0].name)}`;

        } else if (methodValues.operationId.toLowerCase() === 'get') {

            return `${methodValues.operationId}${tag}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'post') {

        if (methodValues.operationId.toLowerCase() === 'post') {
            return `set${tag}`;
        } else if (methodValues.operationId.toLowerCase() === 'delete') {
            return `remove${tag}`;
        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'put') {

        if (methodValues.operationId.toLowerCase() === 'put') {

            return `update${tag}`

        } else {
            return methodValues.operationId;
        }
    }

    if (methodType.toLowerCase() === 'delete') {

        if (methodValues.operationId.toLowerCase() === 'delete') {

            return `remove${tag}`

        } else {
            return methodValues.operationId;
        }
    }
};
