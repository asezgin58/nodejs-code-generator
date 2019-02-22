"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//Create Item
exports.default = (function (path, structure) {
    fs.writeFileSync("" + path, /*value*/ structure, 'utf8');
});
