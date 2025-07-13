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

  function setShipsLength(){
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


  function placeShips(){

    const shipsLength = setShipsLength()
    const board = buildGameFields()

    function placeShipAt(row, col, length, horizontal){
      const horizontal = direction === "horizontal"
      for(let i = 0; i < length; i++){
        const r = row + (horizontal ? 0 : i)
        const c = col + (horizontal ? i : 0)
        board[r][c] = 1
      }
    }


  }

  return {
    buildGameFields,
    placeShips
  }
}

module.exports = createGameboard