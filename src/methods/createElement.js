"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
exports.default = (function (path, structure) {
    fs.writeFile("" + path, /*value*/ structure, function (err) {
        if (err) {
            throw err;
        }
    });
});
