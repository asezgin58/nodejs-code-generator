"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var https = require("https");
var createStructureContent_1 = require("./createStructureContent");
var itemExistControl_1 = require("../ItemOperations/itemExistControl");
var app = require("../../app");
var router = express.Router();
var parsedData = '';
var servicesDirPath = '';
//----> router.get->path : '/' = http://localhost:8002/`${app.path}`
router.get('/', function (req, resp) {
    var serviceAddress = app.config.serviceUrl + app.config.servicePath;
    // for certificate error
    var options = {
        rejectUnauthorized: false
    };
    https.get(serviceAddress, options, function (res) {
        res.setEncoding('utf8');
        var rawData = '';
        res.on('data', function (chunk) {
            rawData += chunk;
        });
        res.on('end', function () {
            try {
                if (rawData) {
                    parsedData = JSON.parse(rawData);
                    var paths = parsedData.paths;
                    //Create Directory for Service Files
                    servicesDirPath = './services';
                    //For Service Directory Path Control Operation
                    var type = 'directory';
                    itemExistControl_1.default(servicesDirPath, type); //serverDirPath path is ready
                    //For Create Service Methods
                    createStructureContent_1.default(paths, servicesDirPath);
                    //Output
                    resp.end(JSON.stringify(parsedData));
                }
            }
            catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', function (e) {
        console.error("Got error: " + e.message);
        resp.end("Got error: " + e.message);
    });
});
//
// router.get('/:id', (req: any, resp: any) => {
//
//     console.log("BURAYA GELDİ");
// });
module.exports = router;
module.exports.parsedData = parsedData;
