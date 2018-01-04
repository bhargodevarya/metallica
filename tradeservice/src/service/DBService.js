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
    //console.log("createquery",createQuery(search))
    Trade.find(createQuery(search), 
        '-_id Commodity TradeDate TradeId Side Qty Price Location Counterparty').
        then(res => {
        console.log(">>>>",res);
        qclient.publishMessage('trade.ops', 'trade.get', res)
    })
    return Trade.find(q)
}

function createQuery(search) {
    let q={};var fromSet = false;
    //console.log("search is",search)
    if(search.From) {
        //console.log("from found")
        fromSet=true
    }
    if(search.To) {
        if(fromSet) {
            q.TradeDate={$gte: search.From, $lte: search.To}            
        } else {
            q.TradeDate={$lte: search.To}            
        }
    } else {
        if(fromSet) {
            q.TradeDate={$gte: search.From}            
        }
    }
    //console.log("q is", q)
    if(search.Commodity) {
        q.Commodity = search.Commodity
    }
    //console.log(search.side)
    if(search.side) {
        q.Side = search.side
    }
    //console.log("q is", q)
    if(search.Location) {
        q.Location = search.Location
    }
    if(search.Counterparty) {
        q.Counterparty = search.Counterparty
    }
    return q
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