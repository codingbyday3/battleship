function createShip(length){

  let hitNum = 0

  function hit(){
    hitNum++
  }
  return{
    length,
    hitNum,
    isFloating:true,
    hit,
  }
}

export {createShip}