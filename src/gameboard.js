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
    function placeShipAt(row, col, length, direction){
      const isHorizontal = direction === "horizontal"
      for(let i = 0; i < length; i++){
        const r = row + (isHorizontal ? 0 : i)
        const c = col + (isHorizontal ? i : 0)
        gameboard[r][c] = 1
      }
    }

    for(let ship of ships){
      placeShipAt(ship.row, ship.col, ship.length, ship.direction)
    }

  }

  function receiveAttack(row, col){

    if(gameboard[row][col] === 1){
      gameboard[row][col] = "O"
      return findHitedShip(row, col)
    }else{
      gameboard[row][col] = "X"
      return "miss"
    }
  }

  function findHitedShip(row, col){
    let r = row
    let c = col
    while (r > 0 && (gameboard[r - 1][c] === 1 || gameboard[r - 1][c] === "O")) {
      r--;
    }
    while (c > 0 && (gameboard[r][c - 1] === 1 || gameboard[r][c - 1] === "O")) {
      c--;
    }

    for(let i = 0; i < ships.length; i ++){
      if(ships[i].row === r && ships[i].col === c){
        return i
      }
    }
  }

  return {
    gameboard,
    placeShips,
    receiveAttack
  }
}

module.exports = createGameboard