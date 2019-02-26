import express = require('express');

require('dotenv').config();

// console.log("Process.Env : ", typeof process.env);//typeOf:object

// let newPort: string = '8003';
//
// process.env.PORT = newPort;
//
// console.log("PORT-new : ", process.env.PORT);

// let newHost: string = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
//
// process.env.SERVICE_URL = newHost;

// console.log("HOST : ", process.env.HOST);

const app: express.Application = express();

const port: any = process.env.PORT || 8002;
const host: string = process.env.HOST || 'http://localhost:';//Example : 127.0.0.1:8080 or http://localhost:8080

app.use(`/`, require('./methods/StructureOperations/CreateStructure'));

app.listen(port, () => {
    console.log(`Server is running at ${host}${port}`);
});