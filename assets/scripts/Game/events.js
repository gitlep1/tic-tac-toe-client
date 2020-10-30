'use strict'

const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const { player1, gameActive, currentPlayer, cells } = require('../store')

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
  
  // this gets the HTML element of the box that was clicked on
  const box = event.target

   // this gets that HTML element's `data-cell-index` attribute value (which represents the index)
  const boxIndex = $(box).data('cell-index')
  console.log('boxIndex is', boxIndex)
  
     // if the box is empty then valid move
    if ($(box).text() === '') {

      // add player to board
      $(box).css('background', 'transparent')
      $(box).text(store.currentPlayer)

      // add player to game array
      store.cells[store.i] = store.currentPlayer
      console.log(store.cells)
      console.log('current player is:', store.cells[store.i])
      store.i++

      // check the api
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
    // checking if the cells[i] (the boxes) are NOT empty 
    // if they are empty end the game otherwise keep continuing
    if (store.cells[store.i] !== '') {
      store.gameActive = false
      $('#gameMessage').text('Game is a tie!')
    } else {
      // setting the cells indexed to i to the current player
      store.cells[store.i] = store.currentPlayer
    }
          // win condition \\
    if (
      store.cells[0] !== '' && 
      store.cells[0] === store.cells[1] &&
      store.cells[1] !=='' &&
      store.cells[1] === store.cells[2] &&
      store.cells[2] !== '' &&
      store.cells[2] === store.cells[1]) {
      $('#gameMessage').text('Player 1 wins!')
    } else if (
      store.cells[3] === 'X' &&
      store.cells[4] === 'X' &&
      store.cells[5] === 'X') {
      $('#gameMessage').text('Player 1 wins!')
    } else if (
      store.cells[6] === 'X' &&
      store.cells[7] === 'X' &&
      store.cells[8] === 'X') {
      $('#gameMessage').text('Player 1 wins!')
    } else {
      console.log('never entered win condition')
    }
  }

module.exports = {
  onNewGame,
  onGameUpdate
}