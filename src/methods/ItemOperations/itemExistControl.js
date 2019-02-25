"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var isDescribe = false;
//Exist Control
exports.default = (function (path, type) {
    if (!fs.existsSync(path)) {
        type === 'directory' ? fs.mkdir(path, function (err) {
            err ? console.log("Error", err) : '';
        }) : null;
        isDescribe = false;
        module.exports.isDescribe = isDescribe;
    }
    else {
        isDescribe = true;
        module.exports.isDescribe = isDescribe;
    }
});
