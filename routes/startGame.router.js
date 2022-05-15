/**
 * desde qui estaremos creando lo que es el nuevo juego con los 3 jugadores 
 * y le estaremos dando los datos pertinentes que se le pediran en las plantilla
 * desde el navegador 
 */
const express = require('express');
const CreateGame = require('../models/createGame.model');

const router = express.Router();

/**
 * @description GET /startGame
 * Render view startGame
 */
router.get('/', (req, res, next) => {
  try {
    res.status(200).render('startGame', {});
  } catch (error) {
    next(error);
  }
});

/**
 * @description POST /startGame
 * Start a bet
 */
router.post('/', (req, res, next) => {
  try {
    const { id, gamerBet } = req.body;
    CreateGame.findOne({id:id})
      .then((resDb) => {res.status(201).json({
        "id": resDb.id,
        "type": "",
        "gamerBet": [{
          "id": resDb.gamers[0].id,
          "bet": gamerBet[0],
          },{
          "id": resDb.gamers[1].id,
          "bet": gamerBet[1],
          },{
          "id": resDb.gamers[2].id,
          "bet": gamerBet[2],
          }
        ]
      })})
      .catch((err) => {res.status(404).json({
        "error": err.message,
        "message": "Game not found"
      })});
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;