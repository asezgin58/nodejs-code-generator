export default (methodParameters: any): boolean => {

    let hasPathParameter: boolean = false;

    for (let parameter of methodParameters) {
        if (parameter.in.toLowerCase() === 'path') {
            hasPathParameter = true;
            return hasPathParameter;
        } else {
            hasPathParameter = false;
        }
    }
    return hasPathParameter;
};