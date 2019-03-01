export default (methodParameters: any, parameterLocation?: string): boolean => {
    let hasOptional: boolean = false;

    for (let parameter of methodParameters) {
        if (!parameterLocation) {
            if (parameter.required === false) {
                hasOptional = true;
                return hasOptional;
            } else {
                hasOptional = false;
            }
        } else {
            if (parameter.required === false && parameter.in.toLowerCase() === parameterLocation.toLowerCase()) {
                hasOptional = true;
                return hasOptional;
            } else {
                hasOptional = false;
            }
        }
    }
    return hasOptional;
};