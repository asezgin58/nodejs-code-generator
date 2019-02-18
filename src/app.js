"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8002;
var serverHost = "http://localhost:" + port; //Example : 127.0.0.1:8080 or http://localhost:8080
var serviceUrl = 'url'; //URL
var servicePath = '/swagger/v1/swagger.json';
app.use("/", require('./methods/appData'));
app.listen(port, function () {
    console.log("Server is running at " + serverHost);
});
module.exports.serviceUrl = serviceUrl;
module.exports.servicePath = servicePath;
