export default (methodParameters: any): boolean => {

    let hasQueryOptional: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.required === false && parameter.in.toLowerCase() === 'query') {
            hasQueryOptional = true;
            return hasQueryOptional;
        } else {
            hasQueryOptional = false;
        }
    }
    return hasQueryOptional;
};