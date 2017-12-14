const mongoose = require('mongoose')

const Commodity = require('../schema/commodity')
const CounterParty = require('../schema/counteryparty')
const Location = require('../schema/location')

function connect(){
    mongoose.connect('mongodb://localhost:27017/Metallica')
}

function createCommodity(commodity) {
    connect()
    let myCommodity = new Commodity({code: commodity.code, desc: commodity.desc})
    myCommodity.save()
}

function createCounterParty(counterParty) {
    connect()
    let myCP = new CounterParty({code: counterParty.code, desc: counterParty.desc})
    myCP.save()
}

function createLocation(location) {
    connect()
    let myLoc = new Location({code: location.code, desc: location.desc})
    myLoc.save()
}

function getAll() {
    connect()
    let result ={}
        var dataFromProm = Location.find({}).
        then(loc => {result.locations=loc;return Commodity.find({});}).
        then(comm => {result.commodities=comm;return CounterParty.find({});}).
        then(cp => {result.counterparties=cp;return result});
        return dataFromProm;
}

module.exports = {createCommodity, createCounterParty, createLocation, getAll}