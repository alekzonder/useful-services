let template = require('./whois.ejs');

let whois = require('whois');

module.exports = function pageIp(req, res) {
    return new Promise((resolve, reject) => {
        let address = req.query.address;

        if (address) {
            whois.lookup(address, (err, data) => {
                if (err) {
                    return reject(err);
                }

                resolve({
                    template,
                    data: {
                        address,
                        result: data
                    }
                });
            });
        } else {
            resolve({
                template,
                data: {
                    address: null,
                    result: null
                }
            });
        }
    });
};
