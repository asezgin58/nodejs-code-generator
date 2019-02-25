import express = require('express');
import https = require('https');
import createStructureContent from "./createStructureContent";
import itemExistControl from "../ItemOperations/itemExistControl";

const app: any = require("../../app");
const router: express.Router = express.Router();

let parsedData: any = '';
let servicesDirPath: string = '';

//----> router.get->path : '/' = http://localhost:8002/`${app.path}`
router.get('/', (req: any, resp: any) => {

    let serviceAddress: string = app.config.serviceUrl + app.config.servicePath;

    // for certificate error
    let options: any = {
        rejectUnauthorized: false
    };

    https.get(serviceAddress, options, (res: any) => {

        res.setEncoding('utf8');
        let rawData: any = '';
        res.on('data', (chunk: any) => {
            rawData += chunk;
        });
        res.on('end', () => {
            try {
                if (rawData) {
                    parsedData = JSON.parse(rawData);
                    let paths: any = parsedData.paths;

                    //Create Directory for Service Files
                    servicesDirPath = './services';

                    //For Service Directory Path Control Operation
                    let type: string = 'directory';
                    itemExistControl(servicesDirPath, type);//serverDirPath path is ready

                    //For Create Service Methods
                    createStructureContent(paths, servicesDirPath);
                    //Output
                    resp.end(JSON.stringify(parsedData));
                }
            } catch (e) {
                console.error(e.message);
            }
        });

    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
        resp.end(`Got error: ${e.message}`);
    });
});
//
// router.get('/:id', (req: any, resp: any) => {
//
//     console.log("BURAYA GELDİ");
// });

module.exports = router;
module.exports.parsedData = parsedData;