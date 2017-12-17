const mongoose = require('mongoose')

const Trade = require('../schema/Trade')

function connect(){
    mongoose.connect('mongodb://localhost:27017/Metallica')
}

function createTrade() {
    connect()
    let myTrade = new Trade({TradeDate: new Date, Commodity: 'AL', Side: 'Buy', 
    Qty: 2000, Price: 3000, CounterParty: 'Lorem', Location: 'NY'})
    myTrade.save()
}

function getAll() {
    connect()
    let result ={}
        var dataFromProm = Trade.find({});
        return dataFromProm;
}

module.exports = {createTrade, getAll}