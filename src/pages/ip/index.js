let template = require('./ip.ejs');

module.exports = function pageIp(req, res) {
    return new Promise((resolve, reject) => {
        let ip = req.ip;
        // TODO add ipv6
        ip = ip.replace(/^::([a-f]*)?:/, '');

        resolve({
            content: template({ip})
        });
    });
};
