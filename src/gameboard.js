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

  function placeShips(){

    function generateShips(){
      const ships = []
      let size = 1
      for(let i = 4; i > 0; i--){
        for(let j = i; j > 0; j--){
          const ship = createShip(size)
          ships.push(ship)
        }
        size++
      }
      return ships
    }
  }

  return {
    buildGameFields,
    placeShips
  }
}

module.exports = createGameboard