'use strict'
const store = require('../store')

const newGameSuccess =  (response)  => {
  $('#message').text('A new game has been created')
  $('.container').show()
}

const newGameFailure =  () => {
  $('#message').text('A new game has failed to be created')
}

const gameUpdateSuccess =  (response)  => {
  $('#message').text('Game has been updated')
  $('.container').show()
}

const gameUpdateFailure =  () => {
  $('#message').text('Game has failed to update')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}