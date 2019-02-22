export default (interfaceName: string, responseInterfaceName: string, params: any): any => {

    let paramsArray: any = params.split(', ');

    params = '';

    for (let i = 0; i < paramsArray.length; i++) {
        params = params + ',\n\t' + paramsArray[i];
    }

    params = params.slice(2, params.length);

    return `export interface ${interfaceName} {
${params}
}\n\n`;
};