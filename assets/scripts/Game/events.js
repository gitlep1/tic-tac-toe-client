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

      // check the api
      api.gameUpdate(boxIndex, store.currentPlayer)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)

      // change turn
      store.currentPlayer = store.currentPlayer === store.player2 ? store.player1 : store.player2
      console.log('this is player 1 ' + store.player1)
      console.log('this is player 2 ' + store.player2)

      // display turn
      if (store.currentPlayer === store.player1) {
          $('#gameMessage').text("It is now: player1's turn")
      } else if (store.currentPlayer === store.player2) {
          $('#gameMessage').text("It is now: player2's turn")
      }
    }
    console.log('gameActive value is: ' + store.gameActive)
    // checking if the cells[i] (the boxes) are NOT empty if they are empty end the game otherwise keep continuing
    if (store.cells[store.i] !== '') {
      store.gameActive = false
      $('#gameMessage').text('Game is a tie!')
    } else {
      // setting the cells indexed to i to the current player
      store.cells[store.i] = store.currentPlayer
    }
    // store.cells[0] = $(box).data('cell-index')
    // console.log('this is the 0th ele of the cells array: ', store.cells[0])
    // console.log('this is the boxIndex value: ', boxIndex)
    // console.log('this is the boxIndex value 0th ele: ', boxIndex[0])

    console.log(boxIndex)
    if (
      boxIndex === store.cells[0]
      ) {
        store.cells[0] = store.currentPlayer
      console.log('2nd if statement ' + store.player1 + ' is the value')
      store.gameActive = false
      $('#gameMessage').text('Player 1 wins!')
    }
  }
    //   // TO DO
      // console.log('this is player1 value: ', store.player1)
      // store.cells[0] = store.player1
      // store.cells[1] = store.player1
      // store.cells[2] = store.player1

      // store.cells[3] = store.player1
      // store.cells[4] = store.player1
      // store.cells[5] = store.player1

      // store.cells[6] = store.player1
      // store.cells[7] = store.player1
      // store.cells[8] = store.player1
      // if (store.cells[0] === store.player1) {
      // console.log('1st if gameactive')
      // store.gameActive = false
      // $('#gameMessage').text('player 1 won!')
      //}


    // TO DO
      // change background image after every click (do later on)
      // let elements = document.getElementsByClassName(".box")
      // for (let i = 0; i < elements.length; i++) {
      //     elements[i].style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif');
      // }

module.exports = {
  onNewGame,
  onGameUpdate
}