"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var str = require('../../../StringOperations/strMethods');
exports.default = (function (paths, urlPathParam) {
    var hasQueryParameter = true;
    var pathsKeys = Object.keys(paths);
    var i = 0;
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];
        serviceName = str.nameSymbolFilter(serviceName);
        if (serviceName === urlPathParam) {
            var methodValues = Object.values(paths[urlPath]);
            for (i = 0; i < methodValues.length; i++) {
                if (methodValues[i].parameters.length > 0) {
                    for (var _a = 0, _b = methodValues[i].parameters; _a < _b.length; _a++) {
                        var parameter = _b[_a];
                        if (parameter.in.toLowerCase() === 'query') {
                            hasQueryParameter = true;
                            return hasQueryParameter;
                        }
                        else {
                            hasQueryParameter = false;
                        }
                    }
                }
            }
        }
    }
    return hasQueryParameter;
});
