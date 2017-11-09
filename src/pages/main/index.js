let template = require('./main.ejs');

module.exports = function pageMain(req, res) {
    return new Promise((resolve, reject) => {
        resolve({
            content: template()
        });
    });
};
