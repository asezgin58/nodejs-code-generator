"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8002;
var host = "http://localhost:"; //Example : 127.0.0.1:8080 or http://localhost:8080
var config = {};
config.serviceUrl = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
config.servicePath = '/swagger/v1/swagger.json';
// const serviceUrl: any = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
// const servicePath: any = '/swagger/v1/swagger.json';
// const serviceUrl: any = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
// const servicePath: any = '/swagger/v1/swagger.json';
app.use("/", require('./methods/StructureOperations/CreateStructure'));
app.listen(port, function () {
    console.log("Server is running at " + host + port);
});
// module.exports.serviceUrl = serviceUrl;
// module.exports.servicePath = servicePath;
module.exports.config = config;
