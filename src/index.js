var createAndStart = function (params) {
    process.env.PORT = params.port || 8002;
    process.env.HOST = params.host || 'http://localhost:';
    process.env.RUN_PATH = params.runPath || '/';
    process.env.SERVICE_URL = params.serviceUrl;
    process.env.SERVICE_PATH = params.servicePath;
};
module.exports.createAndStart = createAndStart;
