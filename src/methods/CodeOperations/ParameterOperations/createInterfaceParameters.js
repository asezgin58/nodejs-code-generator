"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (interfaceName, responseInterfaceName, params) {
    var paramsArray = params.split(', ');
    params = '';
    for (var i = 0; i < paramsArray.length; i++) {
        params = params + ',\n\t' + paramsArray[i];
    }
    params = params.slice(2, params.length);
    return "export interface " + interfaceName + " {\n" + params + "\n}\n\n";
});
