const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { uuid } = require('../utils/uuidRandom');

/**
 * desde aqui estaremos con la logica para crear un juego nuevo 
 * estaremos creando el esquema para el juego nuevo
 */
const createGameSchema = new Schema({
    id: {
      type: String,
      unique: true,
      default: uuid(),
    },
    type: {
      type: String,
      trim: true,
      default: '',
    },
    gamers: [{
      id: {
        type: String,
        default: uuid(),
        unique: true,
      }, name: {
        type: String,
        trim: true,
        default: '',
      }
    }],
    Inprogress: {
      type: Boolean,
      default: false,
    },
    winner: {
      id: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        trim: true,
        default: '',
      }
    }
  });
  
  module.exports = CreateGame = mongoose.model('CreateGame', createGameSchema);