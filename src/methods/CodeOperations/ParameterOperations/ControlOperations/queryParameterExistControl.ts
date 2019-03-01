export default (methodParameters: any): boolean => {

    let hasQueryParameter: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.in.toLowerCase() === 'query') {
            hasQueryParameter = true;
            return hasQueryParameter;
        } else {
            hasQueryParameter = false;
        }
    }
    return hasQueryParameter;
};