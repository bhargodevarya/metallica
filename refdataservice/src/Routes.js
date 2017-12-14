const DBservice = require('./service/DBService')

var routes = [{
    method: 'GET',
    path : '/refdata',
    handler : function(request, reply) {
        return DBservice.getAll()
    }
}]

module.exports = routes