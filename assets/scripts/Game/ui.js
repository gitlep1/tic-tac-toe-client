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

  // let elements = document.getElementsByClassName(".box")
  //   for (let i = 0; i < elements.length; i++) {
  //       elements[i].style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif');
   // }
}

const gameUpdateFailure =  () => {
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}