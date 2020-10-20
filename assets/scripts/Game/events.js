const ui = require('./ui')
const api = require('./api')
const store = require('../store')

const onNewGame = (event) => {
  event.preventDefault()

  // reset your game variables
  store.cells = ["", "", "", "", "", "", "", "", ""]
  store.gameActive = true
  store.i = 0
  store.player1 = 'X'
  store.player2 = 'O'
  store.currentPlayer = 'X'

  // clear the board
  $('.box').text('')
  
  // set the message back to player 1
  $('#gameMessage').text("It is now: player1's turn")

  // create new game with API
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameUpdate = (event) => {
  event.preventDefault()

  api.gameUpdate()
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

$(() => {
  let gameActive = true
  let cells = ["", "", "", "", "", "", "", "", ""]
  let player1 = 'X'
  let player2 = 'O'
  let currentPlayer = player1
  let i = 0

  const onBoxClick = (event) => {

    const box = $(event.target)
   
    // if the box is empty then valid move
    if ( box.text() === '') {

      // add player to board
      box.css('background', 'transparent')
      box.text(currentPlayer)

      // add player to game array
      cells[i] = currentPlayer
      i++

      // change turn
      currentPlayer = currentPlayer === player2 ? player1 : player2

      // display turn
      if (currentPlayer === player1) {
          $('#gameMessage').text("It is: player1's turn")
      } else if (currentPlayer === player2) {
          $('#gameMessage').text("It is: player2's turn")
      }
    }
    if (cells[i] !== '') {
      gameActive = false
      $('#gameMessage').text('Game is over!')
    }
    console.log(cells)
    // if (gameActive === false) {
    //   cells[0] = $('#cell1')
    //   cells[1] = $('#cell2')
    //   console.log(cells[0])
    //   console.log(cells[1])
    //   console.log('1st if gameactive')

    //   if (cells[0] === 'X' && cells[1] === 'O') {
    //     console.log('3rd if gameactive')
    //     $('#gameMessage').text('player 1 won!')
    //   }
    // }
  }
      // console.log(cells)

  $('.box').on('click', onBoxClick)

  $('#new-game').on('submit', onNewGame)
})

// change background image after every click (do later on)
    // let elements = document.getElementsByClassName(".box")
    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif');
    // }

module.exports = {
  onNewGame,
  onGameUpdate
}