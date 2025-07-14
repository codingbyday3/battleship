const createGameboard = require("./gameboard")

function createPlayer(){

  function realPlayer(){
    const gameboard = createGameboard()
    gameboard.placeShips()

    return gameboard
  }

  function computerPlayer(){
    const gameboard = createGameboard()
    gameboard.placeShips()

    return gameboard
  }

  return {
    realPlayer,
    computerPlayer
  }
}

module.exports = createPlayer 