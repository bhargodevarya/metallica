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

function upsertTrade(trade, shouldConnect) {
    if(shouldConnect) {
        connect();
    }
    let newOb = {}
    newOb = Object.assign(newOb,trade._doc)
    delete newOb._id
    Trade.findOneAndUpdate({"TradeId": trade.TradeId},newOb,{upsert:true, new: true},(err,res) => {
        if(err) {
            console.log(err)
            return;
        } else {
            qclient.publishMessage('trade.ops', 'trade.updates', res)    
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

function generateTradeIdAndSave(obj) {
    connect()
    Trade.count({}, (err, cnt) => {
        if(err) {
            console.log("error counting", err)
        } else {
            console.log("The count is", cnt, "TradeId will be", cnt+1)
            let trade = new Trade({TradeDate: obj.TradeDate,
                TradeId: cnt+1, Commodity: obj.Commodity, 
                Side: obj.Side, Qty: obj.Qty, 
                Price: obj.Price, Counterparty: obj.Counterparty, 
                Location: obj.location
            })
            upsertTrade(trade, false)
        }
    })
}

//TODO fix this
function maxDemo() {
    connect()
    Trade.aggregate({
        $group:{_id:'$TradeId', maxTradeId: {$max:'$TradeId'}}
    },{$project: {_id:0,maxTradeId:1}},
    (res, err) => {
        console.log(res)
    })
}

module.exports = {createTrade, getAll, searchTrade, 
    deleteTrade, upsertTrade, generateTradeIdAndSave, 
    maxDemo, connect}