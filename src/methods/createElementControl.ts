import fs = require('fs')

var isDescribe: boolean = false;

let describeControl: Function = (path: string, type: string) => {

    if (!fs.existsSync(path)) {
        type === 'directory' ? fs.mkdirSync(path) : null;
        isDescribe = false;
        module.exports.isDescribe = isDescribe;
    } else {
        isDescribe = true;
        module.exports.isDescribe = isDescribe;
    }
};
module.exports.describeControl = describeControl;