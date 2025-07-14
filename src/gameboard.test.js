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