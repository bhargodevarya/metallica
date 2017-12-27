const Hapi = require('hapi');

let DbService = require('./service/DBService')
let routes = require('../src/Routes')

const server = new Hapi.Server({port: 4000, host: 'localhost'});

server.route(routes)

//DbService.createTrade()

// DbService.searchTrade({
//     from:new Date("2017-12-15"),
//     to:new Date("2017-12-18"),
//     location:"NY",
//     side:"Buy",
//     commodity:"AL"
// }).then(res => {
//     //console.log(res)
// })

server.start((err) => {
    if(err) {
        throw err;
    }
})

