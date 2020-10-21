const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const { currentPlayer } = require('../store')

const onNewGame = (event) => {
  event.preventDefault()
  

  // reset game variables
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
  const box = event.target
  const boxIndex = $(box).data('cell-index')
  
    // if the box is empty then valid move
    if ($(box).text() === '') {

      // add player to board
      $(box).css('background', 'transparent')
      $(box).text(store.currentPlayer)

      // add player to game array
      store.cells[store.i] = store.currentPlayer
      console.log(store.cells)
      console.log(store.cells[store.i])
      store.i++

      api.gameUpdate(boxIndex, store.currentPlayer)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)

      // change turn
      store.currentPlayer = store.currentPlayer === store.player2 ? store.player1 : store.player2

      // display turn
      if (store.currentPlayer === store.player1) {
          $('#gameMessage').text("It is now: player1's turn")
      } else if (store.currentPlayer === store.player2) {
          $('#gameMessage').text("It is now: player2's turn")
      }
    }
    if (store.cells[store.i] !== '') {
      store.gameActive = false
      $('#gameMessage').text('Game is over!')
    }
    // if (store.gameActive === false) {
    //   store.cells[0] = $('#cell1')
    //   store.cells[1] = $('#cell2')
    //   store.cells[2] = $('#cell3')
    //   console.log(store.cells[0])
    //   console.log(store.cells[1])
    //   console.log(store.cells[2])
    //   console.log('1st if gameactive')

    // } else if (store.cells[0] === 'X' && store.cells[1] === 'O' && store.cells[2] === 'X') {
    //     console.log('2nd if gameactive')
    //     $('#gameMessage').text('player 1 won!')
    // }
  }

// change background image after every click (do later on)
    // let elements = document.getElementsByClassName(".box")
    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif');
    // }

module.exports = {
  onNewGame,
  onGameUpdate
}