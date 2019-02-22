import express = require('express');

const app: express.Application = express();

const port: any = 8002;
const serverHost: string = `http://localhost:${port}`;//Example : 127.0.0.1:8080 or http://localhost:8080

const serviceUrl: any = 'https://pixage-one-api.apps-int.pcf.dev.kocsistem.com.tr';
const servicePath: any = '/swagger/v1/swagger.json';

app.use(`/`, require('./methods/StructureOperations/CreateStructure'));

app.listen(port, () => {
    console.log(`Server is running at ${serverHost}`);
});

module.exports.serviceUrl = serviceUrl;
module.exports.servicePath = servicePath;

