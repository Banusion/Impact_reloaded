let request = require('request'),
    config  = require('config'),
    url     = require('url')

module.exports = {
    Claims: async (req, res, next) => {
        console.log("claims")
        request({
            url: config.get('tykEndPoint') + '/claims/000000120',
            method: 'GET',
            auth: {
                'bearer': config.get('tykBearer')
            },
            json: true //post as JSON
        }, function(error, response, body) {
            res.status(200).json(body);
        });
    },
    ClaimsDetails: async (req, res, next) => {
      console.log("claimsdetails")
      console.log(url.parse(req.url).query)
      url.parse(req.url).query
      request({
      url: config.get('tykEndPoint') + '/deployments/' + url.parse(req.url).query,
      method: 'GET',
      auth: {
        'bearer': config.get('tykBearer')
      },
      json: true //post as JSON
        }, function(error, response, body) {
        res.status(200).json(body);
      });
    }
}