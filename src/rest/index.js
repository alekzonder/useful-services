let pkg = require('../../package.json');

module.exports = function initRest(service) {
    service.setEndpoint('/api/v0');

    service.addMethods({
        'GET /': (req, res) => {
            res.result({
                name: pkg.name,
                version: pkg.version
            });
        }
    });
};
