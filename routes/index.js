/**
 * desde qui estaremos creando las rutas que tedra el proyecto
 * con ellas podemos navegar en ellas desde el navedador de si preferencia en el 
 * sieguiente enlace http://localhost:3000 y agregaremos la ruta que deseamos ver
 */
const express = require("express");

const createGame = require('./game.router');
const winnerGame = require('./winner.router');
const startGame = require('./startGame.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/',router)
    router.use('/createGame', createGame);
    router.use('/game', winnerGame);
    router.use('/startGame', startGame);
  }
  
  module.exports = routerApi;