interface ICreateAndStart {
    port: any,
    host: string,
    runPath: string,
    serviceUrl: string,
    servicePath: string
}

let createAndStart: Function = (params: ICreateAndStart) => {
    process.env.PORT = params.port || 8002;
    process.env.HOST = params.host || 'http://localhost:';
    process.env.RUN_PATH = params.runPath || '/';
    process.env.SERVICE_URL = params.serviceUrl;
    process.env.SERVICE_PATH = params.servicePath;
};

module.exports.createAndStart = createAndStart;