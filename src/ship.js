function createShip(length){

  let hitNum = 0

  return{
    length,
    hitNum,
    isFloating:true,
  }
}

export {createShip}