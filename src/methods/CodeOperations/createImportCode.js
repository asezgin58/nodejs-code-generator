"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (interfaceName, hasParameter) {
    if (hasParameter === true) {
        return "import * as " + interfaceName + " from './" + interfaceName + "';\nimport {krax} from \"react-krax\";\nconst queryString = require('query-string');\n\n";
    }
    else {
        return "import {krax} from \"react-krax\";\n\n";
    }
    // return `import {krax} from "react-krax";\n\n`;
});
