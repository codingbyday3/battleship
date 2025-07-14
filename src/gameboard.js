const createShip  = require("./ship");

function createGameboard(){

  let gameboard = []
  const ships = [
    createShip(0, 8, 2, "horizontal"),
    createShip(1, 1, 4, "horizontal"),
    createShip(2,8, 1, "horizontal"),
    createShip(3, 0, 2, "vertical"),
    createShip(3, 4, 2, "horizontal"),
    createShip(5, 6, 1, "horizontal"),
    createShip(6, 3, 1, "horizontal"),
    createShip(7, 1, 3, "vertical"),
    createShip(8, 3, 3, "horizontal"),
    createShip(8, 9, 1, "horizontal")
  ];
  const missedAttacks = []
  
  function buildGameFields(){

    for(let i = 0; i < 10; i++){
      gameboard[i] = []
      for(let j = 0; j < 10; j++){
        gameboard[i][j] = 0
      }
    }
  }

  function placeShips(){
    buildGameFields()
    function placeShipAt(row, col, length, direction, id){
      const isHorizontal = direction === "horizontal"
      for(let i = 0; i < length; i++){
        const r = row + (isHorizontal ? 0 : i)
        const c = col + (isHorizontal ? i : 0)
        gameboard[r][c] = id
      }
    }

    for(let i = 0; i < ships.length; i++){
      placeShipAt(ships[i].row, ships[i].col, ships[i].length, ships[i].direction, i+1)
    }

  }

  function receiveAttack(row, col){

    if(gameboard[row][col] !== 0){
      const shipNum = gameboard[row][col]
      gameboard[row][col] = "O"
      return shipNum
    }else{
      gameboard[row][col] = "X"
      missedAttacks.push({row, col})
      return "miss"
    }
  }

  return {
    gameboard,
    placeShips,
    receiveAttack
  }
}

module.exports = createGameboard