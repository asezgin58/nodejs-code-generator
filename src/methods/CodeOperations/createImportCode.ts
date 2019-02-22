export default (interfaceName: any, hasParameter: boolean): any => {

    if (hasParameter === true) {
        return `import * as ${interfaceName} from './${interfaceName}';
import {krax} from "react-krax";
const queryString = require('query-string');\n\n`;
    } else {
        return `import {krax} from "react-krax";\n\n`;
    }

    // return `import {krax} from "react-krax";\n\n`;
};