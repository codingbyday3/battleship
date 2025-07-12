const createShip  = require("./ship");

test("This ship sunk", ()=>{
  expect(createShip(0).isSunk()).toBe(true)
})

test("This ship sunk", ()=>{
  const ship = createShip(3)
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})