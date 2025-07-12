function createShip(length){

  let hitNum = 0

  function hit(){
    hitNum++
  }

  function isSunk(){
    return hitNum === length

  }
  return{
    length,
    hitNum,
    isFloating:true,
    hit,
    isSunk
  }
}

export {createShip}