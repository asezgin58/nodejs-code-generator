import fs = require('fs')

var isDescribe: boolean = false;

//Exist Control
export default (path: string, type: string) => {

    if (!fs.existsSync(path)) {
        type === 'directory' ? fs.mkdir(path, (err) => {
            err ? console.log("Error", err) : ''
        }) : null;
        isDescribe = false;
        module.exports.isDescribe = isDescribe;
    } else {
        isDescribe = true;
        module.exports.isDescribe = isDescribe;
    }
};