require('ejs');

let layout = require('./layout.ejs');

let pageMain = require('./main');
let pageIp = require('./ip');

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

    app.get('/ip', (req, res) => {
        pageIp(req, res)
            .then(({template, data}) => {
                let sendJson = typeof req.query.json !== 'undefined' ||
                               data.useragent.family === 'curl';

                if (sendJson) {
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
