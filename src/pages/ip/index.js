let template = require('./ip.ejs');

let useragentParser = require('useragent');

module.exports = function pageIp(req, res) {
    return new Promise((resolve, reject) => {
        let ip = req.ip;
        // TODO add ipv6
        ip = ip.replace(/^::([a-f]*)?:/, '');

        let rawUseragent = req.headers['user-agent'];

        let useragent = useragentParser.parse(rawUseragent);

        resolve({
            template,
            data: {
                ip,
                rawUseragent,
                browser: useragent.toAgent(),
                os: useragent.os.toString(),
                device: useragent.device.toString(),
                useragent
            }
        });
    });
};
