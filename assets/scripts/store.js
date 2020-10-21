'use strict'

const store = {
  cells: ["", "", "", "", "", "", "", "", ""],
  gameActive: true,
  i: 0,
  player1: {
    value: "X",
    mouse: "https://www.artiestick.com/toons/alphabet/ralph/arg-x-50-trans.gif"
  },
  player2: {
    value: "O",
    mouse: "https://www.artiestick.com/gifs/arg-o-5O-tr.gif"
  },
  currentPlayer: "X"
}

module.exports = store
