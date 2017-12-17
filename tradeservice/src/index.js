const Hapi = require('hapi');

let DbService = require('./service/DBService')
let routes = require('../src/Routes')

const server = new Hapi.Server({port: 4000, host: 'localhost'});

server.route(routes)

DbService.createTrade()

server.start((err) => {
    if(err) {
        throw err;
    }
})

