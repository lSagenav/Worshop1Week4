
const mongoose = require("mongoose");
/**
 * desde aqui estamos creando el modelo que tendra la bd en mongodb
 * donde se le esta diciendo que varialbles se estaran usando o mandando la informaciona  la bd
 * que son la id, type y gamers
 */
const Schema = mongoose.Schema
const {v4: uuidv4} = require('uuid')

const newschema = new Schema({
    id: {type: String, default: uuidv4() },
    type:{type: String, default:""},
    gamers:[{id:{type: String, default: uuidv4()},
            name:{type: String, default:""}}]

})

module.exports = newschema = mongoose.model('createGame',newschema)
