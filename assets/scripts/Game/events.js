const ui = require('./ui')
const api = require('./api')

const onNewGame = (event) => {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

$(() => {
  let gameActive = true
  const cells = ["", "", "", "", "", "", "", "", ""]
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
  }

  $('.box').on('click', onBoxClick)
})

// change background image after every click (do later on)
    // let elements = document.getElementsByClassName(".box")
    // for (let i = 0; i < elements.length; i++) {
    //     elements[i].style.background=url('https://www.artiestick.com/gifs/arg-o-5O-tr.gif');
    // }

$('#gameMessage').text("It is: player1's turn")

module.exports = {
  onNewGame
}