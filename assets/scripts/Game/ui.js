'use strict'
const store = require('../store')

const newGameSuccess =  (response)  => {
  $('#message').text('A new game has been created')
  $('.container').show()
}

const newGameFailure =  () => {
  $('#message').text('A new game has failed to be created')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}