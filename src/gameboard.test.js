const createGameboard = require("./gameboard");
const createShip = require("./ship");


test("ships are not correctly displaying", ()=>{
  const gameboard = createGameboard()
  gameboard.placeShips()
  expect(gameboard.gameboard).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [4, 0, 0, 0, 5, 5, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
    [0, 0, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 0, 9, 9, 9, 0, 0, 0, 10],
    [0, 8, 0, 0, 0, 0, 0, 0, 0, 0]
  ])

})

test("Attack is not working correctly", ()=>{
  const gameboard = createGameboard()

  gameboard.placeShips()
  expect(gameboard.receiveAttack(1, 4)).toBe(2)
})

test("All ships should be sunk?", ()=>{
  const gameboard = createGameboard()

  gameboard.receiveAttack(0, 8)
  gameboard.receiveAttack(0, 9)
  gameboard.receiveAttack(1, 1)
  gameboard.receiveAttack(1, 2)
  gameboard.receiveAttack(1, 3)
  gameboard.receiveAttack(1, 4)
  gameboard.receiveAttack(2, 8)
  gameboard.receiveAttack(3, 0)
  gameboard.receiveAttack(4, 0)
  gameboard.receiveAttack(3, 4)
  gameboard.receiveAttack(3, 5)
  gameboard.receiveAttack(5, 6)
  gameboard.receiveAttack(6, 3)
  gameboard.receiveAttack(7, 1)
  gameboard.receiveAttack(8, 1)
  gameboard.receiveAttack(9, 1)
  gameboard.receiveAttack(8, 3)
  gameboard.receiveAttack(8, 4)
  gameboard.receiveAttack(8, 5)

  expect(gameboard.gameboard.receiveAttack(8, 9)).toBe("Victory, you sunk all the ships!")
})