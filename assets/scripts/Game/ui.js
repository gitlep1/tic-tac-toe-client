'use strict'

const store = require('../store')

const newGameSuccess =  (response)  => {
  $('#message').text('A new game has been created')
  $('.container').show()
  store.game = response.game
}

const newGameFailure =  () => {
  $('#message').text('A new game has failed to be created')
}

const gameUpdateSuccess =  (response)  => {
  $('.container').show()
  store.game = store.response.game
//   if (
//     store.game.cells[0] !== '' && 
//     store.game.cells[0] === store.game.cells[1] &&
//     store.game.cells[1] !=='' &&
//     store.game.cells[1] === store.game.cells[2] &&
//     store.game.cells[2] !== '' &&
//     store.game.cells[2] === store.game.cells[1]) {
//     $('#gameMessage').text('Player 1 wins!')
//   } else if (
//     store.cells[3] === 'X' &&
//     store.cells[4] === 'X' &&
//     store.cells[5] === 'X') {
//     $('#gameMessage').text('Player 1 wins!')
//   } else if (
//     store.cells[6] === 'X' &&
//     store.cells[7] === 'X' &&
//     store.cells[8] === 'X') {
//     $('#gameMessage').text('Player 1 wins!')
//   } else {
//     console.log('never entered win condition')
//   }
}

const gameUpdateFailure =  () => {
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}