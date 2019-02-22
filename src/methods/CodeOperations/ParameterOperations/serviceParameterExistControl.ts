export default (paths: any, urlPathParam: string): any => {
    let hasParameter: boolean = true;
    let pathsKeys: any[] = Object.keys(paths);

    let i: number = 0;
    for (let urlPath of pathsKeys) {
        let serviceName: string = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];

        if (serviceName === urlPathParam) {
            let methodValues: any[] = Object.values(paths[urlPath]);

            for (i = 0; i < methodValues.length; i++) {

                if (methodValues[i].parameters.length > 0) {
                    hasParameter = true;
                    return hasParameter;
                } else {
                    hasParameter = false;
                }
            }
        }
    }
    return hasParameter;
};