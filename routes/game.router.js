/**
 * desde aqui estaremos haciendo el renderisado de la vista del nuevo juego y agregando un nuevo
 * juego a la base de datos que se ha implementado
 * guardaremos los datos del nuevo juego en a bd
 */
const express = require('express');
const CreateGame = require('../models/createGame.model');
const { uuid } = require('../utils/uuidRandom');

const router = express.Router();

/**
 * @description GET /createGame
 * Render view createGame
 */
router.get('/', (req, res, next) => {
  try {
    res.status(200).render('createGame', {});
  } catch (error) {
    next(error);
  }
});

/**
 * @description POST /createGame
 * Add a new game to the database
 */
router.post('/', (req, res, next) => {
  try {
    const { gamer } = req.body;
    const game = new CreateGame({
      id: uuid(),
      type: "",
      gamers: [{
        id: uuid(),
        name: gamer[0],
      },{
        id: uuid(),
        name: gamer[1],
      },{
        id: uuid(),
        name: gamer[2],
      }],
      Inprogress: true,
      winner: {
        id: "",
        name: "",
      }
    });
    game.save()
      .then((resDb) => {res.status(201).json(
        {
          id: resDb.id,
          type: resDb.type,
          gamers: gamer
        }
      )})
      .catch((err) => {res.status(400).json({
        error: err.message,
        message: "Game creation failed"
      })});
      
  } catch (error) {
    next(error);
  }
});

module.exports = router;