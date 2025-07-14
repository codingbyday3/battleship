const createGameboard = require("./gameboard")

function createPlayer(){

  function realPlayer(){
    const gameboard = createGameboard()
    gameboard.placeShips()
  }

  function comuterPlayer(){
    const gameboard = createGameboard()
    gameboard.placeShips()
  }

  return {
    realPlayer,
    comuterPlayer
  }
}