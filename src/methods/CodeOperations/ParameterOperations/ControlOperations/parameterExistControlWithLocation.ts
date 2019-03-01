export default (methodParameters: any, location: string): boolean => {

    let hasParameter: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.in.toLowerCase() === location.toLowerCase()) {
            hasParameter = true;
            return hasParameter;
        } else {
            hasParameter = false;
        }
    }
    return hasParameter;
};