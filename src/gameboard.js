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

    const shipsLength = [
      { row: 0, col: 8, length: 2, horizontal: "horizontal" },
      { row: 1, col: 1, length: 4, horizontal: "horizontal" },
      { row: 2, col: 8, length: 1, horizontal: "horizontal" },
      { row: 3, col: 0, length: 2, horizontal: "vertical" },
      { row: 3, col: 4, length: 2, horizontal: "horizontal" },
      { row: 5, col: 6, length: 1, horizontal: "horizontal" },
      { row: 6, col: 3, length: 1, horizontal: "horizontal" },
      { row: 7, col: 1, length: 3, horizontal: "vertical" },
      { row: 8, col: 3, length: 3, horizontal: "horizontal" },
      { row: 8, col: 9, length: 1, horizontal: "horizontal" }
    ];
    const board = buildGameFields()

    function placeShipAt(row, col, length, direction){
      const isHorizontal = direction === "horizontal"
      for(let i = 0; i < length; i++){
        const r = row + (isHorizontal ? 0 : i)
        const c = col + (isHorizontal ? i : 0)
        board[r][c] = 1
      }
    }

    for(let ship of shipsLength){
      placeShipAt(ship.row, ship.col, ship.length, ship.horizontal)
    }

    return board

  }



  return {
    buildGameFields,
    placeShips
  }
}

module.exports = createGameboard