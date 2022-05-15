
const mongoose = require("mongoose");

const Schema = mongoose.Schema
const {v4: uuidv4} = require('uuid')

const newschema = new Schema({
    id: {type: String, default: uuidv4() },
    type:{type: String, default:""},
    gamers:[{id:{type: String, default: uuidv4()},
            name:{type: String, default:""}}]

})

module.exports = newschema = mongoose.model('createGame',newschema)
