const mongoose = require('mongoose')

const Trade = require('../schema/Trade')
const qclient = require('../../../rabbitmqclient/src/index')

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
    let q = {
        TradeDate: {$gte: search.From, $lte: search.To},
        Commodity: search.Commodity,
        Side: {$in : search.side},
        Location: search.Location,
        //Counterparty: search.Counterparty
    }
    //console.log(q)
    Trade.find(q).then(res => {
        console.log(res);
        qclient.publishMessage('trade.ops', res)
    })
    return Trade.find(q)
}

module.exports = {createTrade, getAll, searchTrade}