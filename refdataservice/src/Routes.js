const DBservice = require('./service/DBService')

var routes = [{
    method: 'GET',
    path : '/refdata',
    handler : function(request, reply) {
        console.log("received a request")
        return DBservice.getAll()
        //return "Hello"
    },
    config: {
        cors: true
    }
}]

module.exports = routes