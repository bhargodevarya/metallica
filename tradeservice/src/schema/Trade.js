const mongoose = require('mongoose');

const Schema = mongoose.Schema

let TradeSchema = new Schema({
    TradeId: Number,
    TradeDate: Date,
    Commodity: String,
    Side: String,
    Qty: Number,
    Price: Number,
    Counterparty: String,
    Location: String

});

const Trade = mongoose.model('trade', TradeSchema);
module.exports = Trade