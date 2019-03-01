export default (methodParameters: any): boolean => {

    let hasBodyParameter: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.in.toLowerCase() === 'body' || parameter.in.toLowerCase() === 'formdata') {
            hasBodyParameter = true;
            return hasBodyParameter;
        } else {
            hasBodyParameter = false;
        }
    }
    return hasBodyParameter;
};