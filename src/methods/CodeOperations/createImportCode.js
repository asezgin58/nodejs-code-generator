"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (interfaceName, hasParameter, hasQueryParameter) {
    if (hasParameter === true && hasQueryParameter === true) {
        return "import * as " + interfaceName + " from './" + interfaceName + "';\nimport {krax} from \"react-krax\";\nconst queryString = require('query-string');\n\n";
    }
    if (hasParameter === true && hasQueryParameter === false) {
        return "import * as " + interfaceName + " from './" + interfaceName + "';\nimport {krax} from \"react-krax\";\n\n";
    }
    if (hasParameter === false) {
        return "import {krax} from \"react-krax\";\n\n";
    }
});
