let mongoose = require('mongoose');

const Schema = mongoose.Schema

var locationSchema = new Schema(
    {
        code: {type: String, minlength: 2, unique: true},
        desc : {type: String, minlength: 4, unique: true}
    }
)

const Location = mongoose.model('location', locationSchema)
module.exports = Location
