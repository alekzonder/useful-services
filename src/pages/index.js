require('ejs');

let layout = require('./layout.ejs');

let pageMain = require('./main');
let pageIp = require('./ip');

module.exports = function initPages(service) {
    let app = service.app;

    app.get('/', (req, res) => {
        pageMain()
            .then(({content}) => {
                res.send(
                    layout({content})
                );
            })
            .catch(res.serverError);
    });

    app.get('/ip', (req, res) => {
        pageIp(req, res)
            .then(({content}) => {
                res.send(
                    layout({content})
                );
            })
            .catch(res.serverError);
    });
};
