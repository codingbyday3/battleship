const createPlayer = require("./player")

function renderGame(){

  function renderFields(){
    const player = createPlayer().realPlayer()
    const comuterPlayer = createPlayer().computerPlayer()
    const playerBoard = document.querySelector(".player-board")
    const enemyBoard = document.querySelector(".enemy-board")

    function renderCorrectField(board, placeToRender){
      for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
          const div = document.createElement("div")
          if(board[i][j] !== 0){
            div.className = "ship"

          }else{
            div.className = "no-ship"
          }

          placeToRender.appendChild(div)
          
          
        }
      }
    }

    renderCorrectField(player.gameboard, playerBoard)
    renderCorrectField(comuterPlayer.gameboard, enemyBoard)
  }


  return {
    renderFields
  }
}

module.exports = renderGame