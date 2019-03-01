export default (interfaceName: any, hasParameter: boolean, hasQueryParameter: boolean): any => {

    if (hasParameter === true && hasQueryParameter === true) {
        return `import * as ${interfaceName} from './${interfaceName}';
import {krax} from "react-krax";
const queryString = require('query-string');\n\n`;
    }

    if (hasParameter === true && hasQueryParameter === false) {
        return `import * as ${interfaceName} from './${interfaceName}';
import {krax} from "react-krax";\n\n`;
    }

    if (hasParameter === false) {
        return `import {krax} from "react-krax";\n\n`;
    }
};