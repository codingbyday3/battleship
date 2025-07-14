const createPlayer = require("./player")

function renderGame(){

  function renderFields(){
    const player = createPlayer().realPlayer()
    const comuterPlayer = createPlayer().computerPlayer()
    const playerBoard = document.querySelector(".player-board")
    const enemyBoard = document.querySelector(".enemy-board")


  }


  return {
    renderFields
  }
}

module.exports = renderGame