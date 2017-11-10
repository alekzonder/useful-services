let service = require('@maf/rest-service')('useful-services');

require('./init/config')(service);

require('./init/di')(service)
    .then((di) => {
        service.di = di;

        require('./rest')(service);

        service.init();

        service.app.use('/static', require('express').static(`${__dirname}/../public/static`));

        require('./pages')(service);

        return service.start();
    })
    .then(() => {
        // done
    })
    .catch((error) => {
        service.exit(error);
    });
