/**
 * desde aqui estaremos creando la logica para poder elegir y mostar el ganador entre los 3 jugadores
 * con los que se inicio el juego nuevo y en el json por el navegador se mostrara el ganador con sus
 * datos respectivos
 */
const express = require('express');
const CreateGame = require('../models/createGame.model');

const router = express.Router();

/**
 * @description GET /game
 * @returns {object} game status
 */
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    CreateGame.findOne({id:id})
      .then((resDb) => {res.json({
        id: resDb.id,
        gamers: {
          'uuid-a': {
            id: resDb.gamers[0].id,
            name: resDb.gamers[0].name,
          },
          'uuid-b': {
            id: resDb.gamers[1].id,
            name: resDb.gamers[1].name,
          },
          'uuid-c': {
            id: resDb.gamers[2].id,
            name: resDb.gamers[2].name,
          },
          Inprogress: false,
          winner: {
            id: resDb.gamers[0].id,
            name: resDb.gamers[0].name,
          }
        }
      })})
      .catch((err) => {res.status(404).json({
        "error": err.message,
        "message": "Game not found"
      })});
    
  } catch (error) {
    next(error);
  }
});

/**
 * @description GET /game
 * @returns {object} game winner only
 */
router.get('/:id/winner', (req, res, next) => {
  try {
    const { id } = req.params;
    CreateGame.findOne({id:id})
      .then((resDb) => {res.json({
        winner: {
          id: resDb.gamers[0].id,
          name: resDb.gamers[0].name,
        }
      })})
      .catch((err) => {res.status(404).json({
        "error": err.message,
        "message": "Winner not found"
      })});

  } catch (error) {
    next(error);
  }
});

module.exports = router;