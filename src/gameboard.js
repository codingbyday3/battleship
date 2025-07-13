const { createShip } = require("./ship");

function createGameboard(){

  function buildGameFields(){
    let gameboard = []

    for(let i = 0; i < 10; i++){
      gameboard[i] = []
      for(let j = 0; j < 10; j++){
        gameboard[i][j] = 0
      }
    }

    return gameboard
  }

  return {
    buildGameFields
  }
}

module.exports = createGameboard