const createShip  = require("./ship");

test("This ship sunk", ()=>{
  expect(createShip(9, 9 ,0, "horizontal").isSunk()).toBe(true)
})

test("This ship sunk", ()=>{
  const ship = createShip(9, 9 ,3, "horizontal")
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})