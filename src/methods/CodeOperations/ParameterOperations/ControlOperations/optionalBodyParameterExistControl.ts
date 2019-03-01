export default (methodParameters: any): boolean => {

    let hasBodyOptional: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.required === false && parameter.in.toLowerCase() === 'body') {
            hasBodyOptional = true;
            return hasBodyOptional;
        } else {
            hasBodyOptional = false;
        }
    }
    return hasBodyOptional;
};