const createGameboard = require("./gameboard");
const createShip = require("./ship");


test("ships are not correctly displaying", ()=>{
  const gameboard = createGameboard()
  gameboard.placeShips()
  expect(gameboard.gameboard).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  ])

})

test("Attack is not working correctly", ()=>{
  const gameboard = createGameboard()

  gameboard.placeShips()
  expect(gameboard.receiveAttack(1, 4)).toBe(1)
})