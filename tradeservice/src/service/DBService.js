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
function deleteTrade(tradeId) {
    connect();
    Trade.remove({TradeId: tradeId})
}

function updateTrade(trade) {
    connect();
    Trade.findOneAndUpdate({TradeId: trade.TradeId},trade)
}

function searchTrade(search) {
    connect();
    return Trade.find({
        TradeDate: {$gte: search.from, $lte: search.to},
        Commodity: search.commodity,
        Side: search.side,
        Location: search.location,
        Counterparty: search.counterparty
    })
}

module.exports = {createTrade, getAll, searchTrade}