let log4js = require('log4js');
log4js.configure({
    appenders: [{
        type: 'console'
    }, {
        type: 'file',
        filename: 'logs/Claims.log',
        category: 'claim',
        maxLogSize:20000000,
    	backups: 20,
    }],
    replaceConsole: true
});

let logger = log4js.getLogger('claim');

module.exports = logger;