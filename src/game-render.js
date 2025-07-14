const createPlayer = require("./player")

function renderGame(){

  function renderFields(){
    const player = createPlayer().realPlayer()
    const comuterPlayer = createPlayer().computerPlayer()
    const playerBoard = document.querySelector(".player-board")
    const enemyBoard = document.querySelector(".enemy-board")

    // for(let i = 0; i < player.gameboard.length; i++){
    //   for(let j = 0; j < player.gameboard[i].length; j++){
    //     if(player.gameboard[i][j] !== 0){

    //     }
    //   }
    // }

  }


  return {
    renderFields
  }
}

module.exports = renderGame