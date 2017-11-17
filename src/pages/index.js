require('ejs');

let layout = require('./layout.ejs');

let pageMain = require('./main');
let pageIp = require('./ip');

function sendJsonMiddleware(req, res, next) {
    if (typeof req.query.json !== 'undefined') {
        req.sendJson = true;
    } else if (req.headers['user-agent'] && req.headers['user-agent'].match(/^curl/)) {
        req.sendJson = true;
    } else if (
        req.headers['content-type'] &&
        req.headers['content-type'].match(/^application\/json/)
    ) {
        req.sendJson = true;
    } else {
        req.sendJson = false;
    }

    next();
}

module.exports = function initPages(service) {
    let app = service.app;

    let version = 1;

    app.get('/', (req, res) => {
        pageMain()
            .then(({content}) => {
                res.send(
                    layout({content, version})
                );
            })
            .catch(res.serverError);
    });

    app.get('/ip', sendJsonMiddleware, (req, res) => {
        pageIp(req, res)
            .then(({template, data}) => {
                if (req.sendJson) {
                    res.json(data);
                } else {
                    let content = template(data);
                    res.send(
                        layout({content, version})
                    );
                }
            })
            .catch(res.serverError);
    });
};
