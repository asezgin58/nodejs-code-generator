"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (paths, urlPathParam) {
    var hasParameter = true;
    var pathsKeys = Object.keys(paths);
    var i = 0;
    for (var _i = 0, pathsKeys_1 = pathsKeys; _i < pathsKeys_1.length; _i++) {
        var urlPath = pathsKeys_1[_i];
        var serviceName = urlPath.slice(1, urlPath.length);
        serviceName = serviceName.split('/')[0];
        if (serviceName === urlPathParam) {
            var methodValues = Object.values(paths[urlPath]);
            for (i = 0; i < methodValues.length; i++) {
                if (methodValues[i].parameters.length > 0) {
                    hasParameter = true;
                    return hasParameter;
                }
                else {
                    hasParameter = false;
                }
            }
        }
    }
    return hasParameter;
});
