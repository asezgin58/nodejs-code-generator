import express = require('express');

const app: express.Application = express();

let config: any = {};

const port: any = 8002;
const host: string = 'http://localhost:';//Example : 127.0.0.1:8080 or http://localhost:8080

config.serviceUrl = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
config.servicePath = '/swagger/v1/swagger.json';

app.use(`/`, require('./methods/StructureOperations/CreateStructure'));

app.listen(port, () => {
    console.log(`Server is running at ${host}${port}`);
});

// module.exports.serviceUrl = serviceUrl;
// module.exports.servicePath = servicePath;
module.exports.config = config;

