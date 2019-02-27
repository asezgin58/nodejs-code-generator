"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require('dotenv').config();
//****************************************************************
// import fs = require('fs')
// // Create Item
// let readServiceFile: Function = (path: string): any => {
//     return fs.readFileSync(`${path}`, 'utf8');
// };
//
// let envContent: string = readServiceFile('./.env');
// let envArray: any = envContent.split('\n');
// let envKeyArray: any = [];
//
// for (let i = 0; i < envArray.length; i++) {
//     envKeyArray[i] = (envArray[i].split('=')[0]).toLowerCase();
// }
//
// console.log("-------------\n", envKeyArray);
//****************************************************************
// console.log("Process.Env : ", typeof process.env);//typeOf:object
// console.log("Process.Env : ", process.env);//typeOf:object
// let newPort: string = '8003';
//
// process.env.PORT = newPort;
//
// console.log("PORT-new : ", process.env.PORT);
// let newHost: string = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
//
// process.env.SERVICE_URL = newHost;
// console.log("HOST : ", process.env.HOST);
var app = express();
var port = process.env.PORT || 8002;
var host = process.env.HOST || 'http://localhost:'; //Example : 127.0.0.1:8080 or http://localhost:8080
app.use("/", require('./methods/StructureOperations/createStructure'));
app.listen(port, function () {
    console.log("Server is running at " + host + port);
});
