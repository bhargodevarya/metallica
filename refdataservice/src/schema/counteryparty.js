let mongoose = require('mongoose');

const Schema = mongoose.Schema

let counterPartySchema = new Schema(
    {
        code: {type: String, minlength: 4, unique: true},
        desc : {type: String, minlength: 4, unique: true}
    }
)

const CounterParty = mongoose.model('counterparty', counterPartySchema)

module.exports = CounterParty
