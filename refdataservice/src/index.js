const routes = require('./Routes')
const Commodity = require('./schema/commodity')
const DBService = require('./service/DBService')
const Location = require('./schema/location')

const Hapi = require('hapi');
//var corsHeaders = require('hapi-cors-headers')

const server = new Hapi.Server({port: 3000, host: 'localhost'});

server.route(routes)

server.start((err) => {
    if(err) {
        throw err;
    } else {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
        
    }
    console.log(`server started at 3000`)
})

let commodities = [
    {code: 'AL', desc: 'Aluminium'},
    {code: 'ZN', desc: 'Zinc'},
    {code: 'CU', desc: 'Copper'},
    {code: 'AU', desc: 'Gold'},
    {code: 'AG', desc: 'Silver'}
]
commodities.forEach(comm => DBService.createCommodity(comm))
let counterParties = [
    {code: 'Lorem', desc: 'Lorem'},
    {code: 'Ipsum', desc: 'Ipsum'},
    {code: 'Dolor', desc: 'Dolor'},
    {code: 'Amet', desc: 'Amet'}
]
//counterParties.forEach(DBService.createCounterParty)

let locations = [
    {code: 'LN', desc: 'London'},
    {code: 'NY', desc: 'New York'},
    {code: 'SG', desc: 'Singapore'},
    {code: 'DN', desc: 'Denver'}
]

//server.ext('onPreResponse', corsHeaders)

//locations.forEach(DBService.createLocation)

//DBService.getAll()


//DBService.createCommodity({code: 'AL', desc: 'Aluminium'})