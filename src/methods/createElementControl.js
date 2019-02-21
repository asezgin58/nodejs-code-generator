"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var isDescribe = false;
//Exist Control
var describeControl = function (path, type) {
    if (!fs.existsSync(path)) {
        type === 'directory' ? fs.mkdirSync(path) : null;
        isDescribe = false;
        module.exports.isDescribe = isDescribe;
    }
    else {
        isDescribe = true;
        module.exports.isDescribe = isDescribe;
    }
};
module.exports.describeControl = describeControl;
