export default (methodParameters: any): boolean => {

    let hasOptional: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.required === false) {
            hasOptional = true;
            return hasOptional;
        } else {
            hasOptional = false;
        }
    }
    return hasOptional;
};