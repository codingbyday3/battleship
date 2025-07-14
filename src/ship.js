function createShip(row, col, length, direction){

  let hitNum = 0

  function hit(){
    hitNum++
  }

  function isSunk(){
    return hitNum === length

  }

  return{
    row,
    col,
    length,
    direction,
    hitNum,
    isFloating:true,
    hit,
    isSunk
  }
}

module.exports = createShip

