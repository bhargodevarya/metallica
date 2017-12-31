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
    Trade.remove({TradeId: tradeId}, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("deleted", tradeId)
        }
    })
}

function upsertTrade(trade) {
    connect();
    let newOb = {}
    newOb = Object.assign(newOb,trade._doc)
    delete newOb._id
    Trade.findOneAndUpdate({"TradeId": trade.TradeId},newOb,{upsert:true, new: true},(err,res) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log("from CB", res)
    })
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
        qclient.publishMessage('trade.ops', 'trade.get', res)
    })
    return Trade.find(q)
}

module.exports = {createTrade, getAll, searchTrade, deleteTrade, upsertTrade, connect}