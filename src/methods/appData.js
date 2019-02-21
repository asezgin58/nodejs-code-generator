"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var https = require("https");
var app = require("../app");
var createServiceModule = require('./createServiceModule');
var element = require('./createElementControl');
var router = express.Router();
var parsedData = '';
var servicesDirPath = '';
//----> router.get->path : '/' = http://localhost:8002/`${app.path}`
router.get('/', function (req, resp) {
    var serviceAddress = app.serviceUrl + app.servicePath;
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
                    element.describeControl(servicesDirPath, type); //serverDirPath path is ready
                    //For Create Service Methods
                    createServiceModule.createServiceFunction(paths, servicesDirPath);
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
