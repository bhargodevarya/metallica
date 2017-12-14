let mongoose = require('mongoose');

const Schema = mongoose.Schema

var commoditySchema = new Schema(
    {
        code: {type: String, minlength: 2, unique: true},
        desc : {type: String, minlength: 4, unique: true}
    }
)

const Commodity = mongoose.model('commodity', commoditySchema)
module.exports = Commodity
