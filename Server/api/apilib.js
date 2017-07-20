let config = require('config');

module.exports = {

    deployements: function(data, cb) {
        //Lets configure and request esbEndpoin
        request({
            url: config.get('tykEndPoint') + '/Claims',
            auth: {
                'bearer': config.get('tykBearer')
            },
            method: 'GET',
            body: data,
            json: true //post as JSON
        }, function(error, response, body) {
            cb(error, response, body);
        });
    },
    claims: function(data, cb) {
        //Lets configure and request esbEndpoin
        request({
            url: config.get('tykEndPoint') + '/Claims',
            auth: {
                'bearer': config.get('tykBearer')
            },
            method: 'GET',
            body: data,
            json: true //post as JSON
        }, function(error, response, body) {
            cb(error, response, body);
        });
    }
};